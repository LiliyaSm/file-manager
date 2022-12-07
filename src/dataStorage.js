import { homedir } from "os";
import { getAbsPath } from "./commands/fileSystem/getAbsPath.js";
import { parseArgs } from "./parseArgs.js";
import fs from "fs";

let currDir;
let username;

export const initStorage = () => {
  currDir = homedir();
  username = parseArgs().username || "Anonym User";
};

export const getCurrDir = () => {
  return currDir;
};

export const getUsername = () => {
  return username;
};

export const setCurrDir = async (value) => {
  const newCurrDir = await getAbsPath(value);
  if (fs.lstatSync(newCurrDir).isDirectory()) {
    currDir = newCurrDir;
  } else {
    // path is not a directory
    throw new Error();
  }
};
