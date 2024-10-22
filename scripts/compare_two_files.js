/***
 **** Used to compare whether two files are exactly the same.
 **** Flutter I10n
 **** @params: sourcePath
 **** @params: targetPath
 **** command: node scripts/compare_lang_key.js sourcePath targetPath
 ***/

const fs = require("fs");

const paramsList = process.argv.slice(2);

function getFileString(path) {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch {
    logErrorAndQuit("read file");
  }
}

(function () {
  console.log("start check...");

  if (paramsList.length !== 2) {
    logErrorAndQuit("please set two correct file path");
  }

  const sourceFile = getFileString(paramsList[0]);
  const targetFile = getFileString(paramsList[1]);

  if (sourceFile !== targetFile) {
    logErrorAndQuit("two files are not the same");
  }

  logSuccess("two files are the same");
})();

function logErrorAndQuit(msg) {
  console.log("\x1b[31m%s\x1b[0m", `something wrong: ${msg}`);
  process.exit(1);
}

function logSuccess(msg) {
  console.log("\x1b[32m%s\x1b[0m", `Successfully: ${msg}`);
}
