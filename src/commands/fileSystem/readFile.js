import { createReadStream } from "fs";
import { getAbsPath } from "../fileSystem/getAbsPath.js";

export const readFile = async (value) => {
  const fileToReadPath = await getAbsPath(value);
  const readableStream = createReadStream(fileToReadPath);
  readableStream.pipe(process.stdout);
};
