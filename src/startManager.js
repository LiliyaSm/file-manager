import { getCurrDir, getUsername } from "./dataStorage.js";

export const startManager = () => {
  const currDir = getCurrDir();
  const username = getUsername();
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${getCurrDir()}`);
};

export const exitManager = () => {
  const username = getUsername();
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
};
