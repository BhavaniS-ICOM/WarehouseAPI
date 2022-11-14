const path = require("path");
const fs = require("fs");
/*
 * Read data from the file - pass the filename to inputFile
 */
module.exports = (inputFile) => {
  try {
    const currentDirectory = path.parse(__dirname).dir;
    const fileOutput = fs.readFileSync(
      path.resolve(currentDirectory, inputFile),
      "utf-8"
    );

    var result = null;
    if (fileOutput !== null && fileOutput !== "") {
      result = JSON.parse(fileOutput);
    }
    return result;
  } catch (err) {
    console.log(err);
  }
};
