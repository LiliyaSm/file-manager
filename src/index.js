import { readFile } from "./commands/fileSystem/readFile.js";
import { startManager, exitManager } from "./startManager.js";
import readline from "readline";
import {
  getDirList,
  goUp,
  changeDir,
} from "./commands/navigation/navigation.js";
import { initCurrDir } from "./dataStorage.js";

const COMMAND_LIST = {
  ".exit": exitManager,
  ls: getDirList,
  cd: changeDir,
  up: goUp,
  cat: readFile,
};

const applyCommand = async (command, value) => {
  const func = COMMAND_LIST[command];
  if (!func) {
    console.log("Invalid input");
    return;
  }
  try {
    await func(value);
  } catch (err) {
    console.log("Operation failed");
    // console.log(err);
    return;
  }
};

const start = () => {
  initCurrDir();
  startManager();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", async (input) => {
    const inputString = input.split(" ");
    const [command] = inputString;
    const value = inputString.slice(1).join(" ");
    await applyCommand(command, value);
  });
  
  rl.on("SIGINT", () => {
    exitManager();
  });
};

start();
