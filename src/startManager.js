import { homedir } from "os";
import readline from "readline";

export const startManager = (username) => {
  let currDir = homedir();
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${currDir}`);
  return currDir;
};

export const exitManager = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
};
