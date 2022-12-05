import { readFile } from "./commands/fileSystem/readFile.js";
import { renameFile } from "./commands/fileSystem/renameFile.js";
import { createFile } from "./commands/fileSystem/createFile.js";
import { exitManager } from "./startManager.js";
import {
  getDirList,
  goUp,
  changeDir,
} from "./commands/navigation/navigation.js";

const COMMAND_LIST = {
  ".exit": exitManager,
  //navigation
  ls: getDirList,
  cd: changeDir,
  up: goUp,
  //fs
  cat: readFile,
  add: createFile,
  rn: renameFile,
};

export const applyCommand = async (input) => {
  const inputString = input.split(" ");
  const [command] = inputString;
  const value = inputString.slice(1).join(" ");

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
