import { access } from "fs/promises";
import path from "path";

export const getAbsPath = async (currDir, pathToValidate) => {
    let resultPath = pathToValidate.trim();
    console.log('resultPath', resultPath);
    if (!path.isAbsolute(pathToValidate)) {
      resultPath = path.join(currDir, pathToValidate);
    }
    console.log(resultPath);
    await access(resultPath);
    return resultPath;
  };
