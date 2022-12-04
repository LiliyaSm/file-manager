import { homedir } from "os";
import { getAbsPath } from "./commands/fileSystem/getAbsPath.js";

let currDir;

export const initCurrDir = () => {
  currDir = homedir();
};

export const getCurrDir = function () {
  return currDir;
};

export const setCurrDir = async (value) => {
  const newCurrDir = await getAbsPath(value);
  currDir = newCurrDir;
//   return newCurrDir;
};
