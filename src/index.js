import { startManager, exitManager } from "./startManager.js";
import readline from "readline";
import { initStorage } from "./dataStorage.js";
import { applyCommand } from "./applyCommand.js";

const start = () => {
  initStorage();
  startManager();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", async (input) => {
    await applyCommand(input);
  });

  rl.on("SIGINT", () => {
    exitManager();
  });
};

start();
