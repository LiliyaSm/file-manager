import { access } from "fs/promises";
import { getCurrDir } from "../../dataStorage.js"
import path from "path";

export const getAbsPath = async (pathToValidate) => {
    let resultPath = pathToValidate.trim();
    if (!path.isAbsolute(resultPath)) {
      resultPath = path.join(getCurrDir(), pathToValidate);
    }
    await access(resultPath);
    return resultPath;
  };
