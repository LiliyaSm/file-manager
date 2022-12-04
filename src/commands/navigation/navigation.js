import { readdir } from "fs/promises";
import { getCurrDir, setCurrDir } from "../../currDir.js";
import path from "path";

export const getDirList = async (src) => {
  const files = await readdir(src, { withFileTypes: true });
  const tableData = files.map((file) => ({
    Name: file.name,
    Type: file.isFile() ? "file" : "directory",
  }));

  tableData.sort((row, nextRow) => {
    if (row.Type > nextRow.Type) {
      return 1;
    } else if (row.Type < nextRow.Type) {
      return -1;
    } else {
      if (row.Name.toLocaleLowerCase() < nextRow.Name.toLocaleLowerCase()) {
        return -1;
      }
      if (row.Name.toLocaleLowerCase() < nextRow.Name.toLocaleLowerCase()) {
        return 1;
      }
    }
  });

  console.table(tableData);
};

export const goUp = async () => {
  const parentDir = path.dirname(getCurrDir());
  await setCurrDir(parentDir);
};

export const changeDir = async (newPath) => {
  await setCurrDir(newPath);
};
