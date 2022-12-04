import { getCurrDir } from './currDir.js'

export const startManager = (username) => {
  const currDir = getCurrDir();
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${currDir}`);
};

export const exitManager = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
};
