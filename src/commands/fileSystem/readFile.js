import { createReadStream } from "fs";
import { getAbsPath } from "../fileSystem/getAbsPath.js";
import { getCurrDir } from "../../dataStorage.js";

export const readFile = async (value) => {
  try {
    const fileToReadPath = await getAbsPath(value);
    const readableStream = createReadStream(fileToReadPath, {
      encoding: "utf8",
    });
    readableStream.on("data", (data) => {
      console.log(data);
      console.log(`You are currently in ${getCurrDir()}`);
    });
    readableStream.on("error", (err) => {throw err});
  } catch {
    console.log("Operation failed");
  }
};
