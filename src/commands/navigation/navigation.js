import { readdir } from "fs/promises";
// import fs from "fs";
import path from "path";
// import { fileURLToPath } from "url";
// import { getAbsPath } from "./commands/fileSystem/getAbsPath.js";

export const getDirList = async (src) => {
  const files = await readdir(src, { withFileTypes: true });
  console.log(files);
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
