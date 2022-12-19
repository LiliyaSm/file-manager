import { getCurrDir } from "../../dataStorage.js";
import { createReadStream, createWriteStream } from "fs";
import path from "path";

//cp path_to_file path_to_new_directory
export const copyFile = async (value) => {
  try {
    let [pathToFile, pathToNewDirectory] = value.split(" ");
    const fileName = path.basename(pathToFile);
    pathToNewDirectory = path.join(pathToNewDirectory, fileName);

    const readableStream = createReadStream(pathToFile, {
      encoding: "utf8",
    });
    readableStream.on("error", () => {
      console.log("Operation failed");
      return;
    });
    const writableStream = createWriteStream(pathToNewDirectory);
    writableStream.on("error", () => {
      console.log("Operation failed");
      return;
    });
    writableStream.on("finish", () => {
      console.log(`You are currently in ${getCurrDir()}`);
    });
    readableStream.pipe(writableStream);
  } catch {
    console.log("Operation failed");
  }
};
