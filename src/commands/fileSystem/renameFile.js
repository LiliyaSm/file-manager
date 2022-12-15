import { rename as renameFS } from "fs/promises";
import fs from "fs";
import path from "path";
import { getCurrDir } from "../../dataStorage.js";

export const renameFile = async (value) => {
  try {
    const [pathToFile, newFilename] = value.split(" ");
    const dirPath = path.dirname(pathToFile);
    const resultPath = path.join(dirPath, newFilename);
    //make sure that properFilename.md doesn't already exist
    await access(resultPath);
    await renameFS(pathToFile, resultPath);
    console.log(`You are currently in ${getCurrDir()}`);
  } catch(err) {
    console.log("Operation failed");
  }
};
