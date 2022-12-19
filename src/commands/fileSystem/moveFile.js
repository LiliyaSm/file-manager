import { copyFile } from "./copyFile.js";
import { rm } from "fs/promises";
import fs from "fs";
import { access } from "fs/promises";

// mv path_to_file path_to_new_directory
export const moveFile = async (value) => {
  const [pathToFile] = value.split(" ");
  try {
    await access(pathToFile);
    copyFile(value);
    await rm(pathToFile);
  } catch (err) {
    console.log("Operation failed");
  }
};
