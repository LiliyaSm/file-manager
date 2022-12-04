// import { readdir } from "fs/promises";
// import fs from "fs";
import path from "path";
// import { fileURLToPath } from "url";
import { getAbsPath } from "./commands/fileSystem/getAbsPath.js";
import { readFile } from "./commands/fileSystem/readFile.js";
import { parseArgs } from "./parseArgs.js";
import { startManager, exitManager } from "./startManager.js";
import readline from "readline";
import { getDirList } from "./commands/navigation/navigation.js";

const start = () => {
  const { username } = parseArgs();
  let currDir = startManager(username);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", async (input) => {
    const inputString = input.split(" ");
    const [command] = inputString;
    const value = inputString.slice(1).join(" ");
    if (command === ".exit") {
      exitManager(username);
    }
    if (command === "ls") {
      try {
        console.log(currDir);
        await getDirList(currDir);
      } catch {
        console.log("Operation failed");
        return;
      }
    } else if (command === "cd") {
      try {
        currDir = await getAbsPath(currDir, value);
      } catch {
        console.log("Operation failed");
        return;
      }
    } else if (command === "up") {
      currDir = path.dirname(currDir);
    } else if (command === "cat") {
      try {
        currDir = await getAbsPath(currDir, value);
        await readFile(currDir); 
      } catch {
        console.log("Operation failed");
        return;
      }
    } else {
      console.log("Invalid input");
      return;
    }
    console.log(`You are currently in ${currDir}`);
  });
  rl.on("SIGINT", () => {
    exitManager(username);
  });
};

start();
