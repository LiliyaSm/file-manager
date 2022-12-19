import { rename as renameFS } from "fs/promises";
import path from "path";
import { getCurrDir } from "../../dataStorage.js";

export const renameFile = async (value) => {
  try {
    const [pathToFile, newFilename] = value.split(" ");
    const dirPath = path.dirname(pathToFile);
    const resultPath = path.join(dirPath, newFilename);
    await renameFS(pathToFile, resultPath);
    console.log(`You are currently in ${getCurrDir()}`);
  } catch {
    console.log("Operation failed");
  }
};
