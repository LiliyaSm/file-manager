import { homedir } from "os";
import { getAbsPath } from "./commands/fileSystem/getAbsPath.js";
import { parseArgs } from "./parseArgs.js";

let currDir;
let username;

export const initCurrDir = () => {
  currDir = homedir();
  username = parseArgs().username;
};

export const getCurrDir = () => {
  return currDir;
};

export const getUsername = () => {
  return username;
};

export const setCurrDir = async (value) => {
  const newCurrDir = await getAbsPath(value);
  currDir = newCurrDir;
  //   return newCurrDir;
};
