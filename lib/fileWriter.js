const path = require("path");
const fs = require("fs");
/*
 * Read data from the file - pass the filename to inputFile
 */
module.exports = (inputFile, data) => {
  const currentDirectory = path.parse(__dirname).dir;

  return fs.writeFileSync(
    path.resolve(currentDirectory, inputFile),
    JSON.stringify(data),
    "utf8",
    (err, result) => {
      if (err) return err;
      return result;
    }
  );
};
