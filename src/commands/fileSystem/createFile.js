import { writeFile } from "fs/promises";
import { getCurrDir } from "../../dataStorage.js";
import path from "path";

export const createFile = async (fileName) => {
  try {
    const currDir = getCurrDir();
    const src = path.join(currDir, fileName);
    await writeFile(src, "", { flag: "wx" });
    console.log(`You are currently in ${currDir}`);
  } catch {
    console.log("Operation failed");
  }
};
