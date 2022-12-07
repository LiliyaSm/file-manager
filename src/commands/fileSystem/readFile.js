import { createReadStream } from "fs";
import { getAbsPath } from "../fileSystem/getAbsPath.js";
import { getCurrDir } from "../../dataStorage.js";

//cat path_to_file
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
    readableStream.on("error", () => {
      console.log("Operation failed");
    });
  } catch {
    console.log("Operation failed");
  }
};
