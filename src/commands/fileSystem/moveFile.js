import { copyFile } from "./copyFile.js";
import { rm } from "fs/promises";
import fs from "fs";

// mv path_to_file path_to_new_directory
export const moveFile = async (value) => {
  const [pathToFile] = value.split(" ");
  try {
    console.log("pathToFile", pathToFile);
    if (!fs.existsSync(pathToFile)) throw new Error();
    copyFile(value);
    await rm(pathToFile);
  } catch (err) {
    console.log("Operation failed");
  }
};
