import { readFile } from "./commands/fileSystem/readFile.js";
import { parseArgs } from "./parseArgs.js";
import { startManager, exitManager } from "./startManager.js";
import readline from "readline";
import { getDirList, goUp, changeDir } from "./commands/navigation/navigation.js";
import { getCurrDir, initCurrDir, setCurrDir } from "./currDir.js";

const start = () => {
  const { username } = parseArgs();
  initCurrDir();
  startManager(username);

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
        await getDirList(getCurrDir());
      } catch {
        console.log("Operation failed");
        return;
      }
    } else if (command === "cd") {
      try {
        await changeDir(value);
      } catch (err) {
        console.log(err);
        return;
      }
    } else if (command === "up") {
      await goUp();
    } else if (command === "cat") {
      try {
        await readFile(value);
      } catch {
        console.log("Operation failed");
        return;
      }
    } else {
      console.log("Invalid input");
      return;
    }
    console.log(`You are currently in ${getCurrDir()}`);
  });
  rl.on("SIGINT", () => {
    exitManager(username);
  });
};

start();
