import { readFile } from "./commands/fileSystem/readFile.js";
import { renameFile } from "./commands/fileSystem/renameFile.js";
import { createFile } from "./commands/fileSystem/createFile.js";
import { deleteFile } from "./commands/fileSystem/deleteFile.js";
import { moveFile } from "./commands/fileSystem/moveFile.js";
import { copyFile } from "./commands/fileSystem/copyFile.js";

import { runOsCommand } from "./commands/operatingSystem/osCommands.js";
import { calculateHash } from "./commands/calculateHash/calculateHash.js";
import { compress, decompress } from "./commands/compression/compression.js";
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
  cp: copyFile,
  rm: deleteFile,
  mv: moveFile,
  //os
  os: runOsCommand,
  //hash
  hash: calculateHash,
  //compression
  compress,
  decompress
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
  } catch {
    console.log("Operation failed");
    return;
  }
};
