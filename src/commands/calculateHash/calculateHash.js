import crypto from "crypto";
import { readFile } from "fs/promises";
import { getCurrDir } from "../../dataStorage.js";

// hash path_to_file
export const calculateHash = async (path) => {
  try {
    const fileBuffer = await readFile(path);
    const hashSum = crypto.createHash("sha256");
    hashSum.update(fileBuffer);
    const hex = hashSum.digest("hex");

    console.log(`hash for a file: ${hex}`);
    console.log(`You are currently in ${getCurrDir()}`);
  } catch (err) {
    console.log("Operation failed");
  }
};
