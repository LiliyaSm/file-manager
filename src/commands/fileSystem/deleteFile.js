import { rm } from "fs/promises";
import { getCurrDir } from "../../dataStorage.js";

// rm path_to_file
export const deleteFile = async (fileToRemovePath) => {
  try {
    await rm(fileToRemovePath);
    console.log(`You are currently in ${getCurrDir()}`);
  } catch {
    console.log("Operation failed");
  }
};
