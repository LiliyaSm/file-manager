import os, { EOL } from "os";

//os --EOL
const getEOL = () => {
  console.log(`EOL: ${EOL}`);
};

// os --cpus
const getCpus = () => {
  const cpusInfo = os.cpus();
  const listOfModels = cpusInfo.map(({ model, speed }) => ({
    model,
    speed,
  }));
  console.log(`number of cpus: ${cpusInfo.length}`);
  console.log(listOfModels);
};

// os --homedir
const getHomedir = () => {
  console.log(`homedir: ${os.homedir()}`);
};

// os --username
const getSystemUsername = () => {
  console.log(`username: ${os.userInfo().username}`);
};

// os --architecture
const getSystemArch = () => {
  console.log(`architecture : ${os.arch()}`);
};

const OS_COMMANDS = {
  eol: getEOL,
  cpus: getCpus,
  homedir: getHomedir,
  username: getSystemUsername,
  architecture: getSystemArch,
};

export const runOsCommand = (value) => {
  const arg = value.slice(2).toLowerCase();
  const funcName = OS_COMMANDS[arg];
  funcName();
};
