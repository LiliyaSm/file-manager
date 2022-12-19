import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from "fs";
import { access } from "fs/promises";
import { getCurrDir } from "../../dataStorage.js";

const createStreams = async (value, zipMethod) => {
  try {
    const [pathToFile, pathToDestination] = value.split(" ");
    await access(pathToFile);
    const source = createReadStream(pathToFile);
    const destination = createWriteStream(pathToDestination);
    source.pipe(zipMethod).pipe(destination);
    console.log(`You are currently in ${getCurrDir()}`);
  } catch {
    console.log("Operation failed");
    return;
  }
};

// compress path_to_file path_to_destination
export const compress = (value) => {
  const zipMethod = createBrotliCompress();
  createStreams(value, zipMethod);
};

//decompress path_to_file path_to_destination
export const decompress = (value) => {
  const zipMethod = createBrotliDecompress();
  createStreams(value, zipMethod);
};
