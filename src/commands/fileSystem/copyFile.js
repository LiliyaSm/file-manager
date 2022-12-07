import { getCurrDir } from "../../dataStorage.js";
import { createReadStream, createWriteStream } from "fs";

//cp path_to_file path_to_new_directory
export const copyFile = (value) => {
  try {
    const [pathToFile, pathToNewDirectory] = value.split(" ");
    const readableStream = createReadStream(pathToFile, {
      encoding: "utf8",
    });
    readableStream.on("error", () => {
      console.log("Operation failed");
    });
    const writableStream = createWriteStream(pathToNewDirectory);
    writableStream.on("error", () => {
      console.log("Operation failed");
    });
    writableStream.on("finish", () => {
      console.log(`You are currently in ${getCurrDir()}`);
    });
    readableStream.pipe(writableStream);
  } catch {
    console.log("Operation failed с");
  }
};
