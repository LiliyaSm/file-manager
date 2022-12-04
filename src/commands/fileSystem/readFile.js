import { createReadStream } from "fs";

export const readFile = async (fileToReadPath) => {
  const readableStream = createReadStream(fileToReadPath);
  readableStream.pipe(process.stdout);
  //   console.log(fileContent);
};
