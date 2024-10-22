/***
 **** Used to filter unknown commits when we create new release branch based on previous tag
 **** Step1: Add a new tag named [tag].
 **** Step2: Check previous tag description
 **** Step3: Export git log history. `git log --oneline [previous tag name]..[current tag name] > ./log.txt`,
 ****        if want to check commit between last release tag and newest, run `git log --oneline [previous tag name]..main > ./log.txt`
 **** Step4: Update known list.
 **** Step5: Filter unknown commits. `node scripts/filter_unknown_release_commits.js`
 ****
 **** command: node scripts/filter_unknown_release_commits.js
 ***/

const fs = require("fs");

function getFileString(path) {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch {
    console.error("read file failed");
    process.exit(1);
  }
}

const list1 = [];
const list2 = [];
const white_list = [];

function checkIfCanFoundInList(list, log) {
  return list.filter((e) => log.includes(e.toString())).length > 0;
}

(function () {
  console.log("start reading logs");

  const logs = getFileString("log.txt").split("\n");
  const unknownLogs = logs.filter((log) => {
    return (
      !checkIfCanFoundInList(list1, log) &&
      !checkIfCanFoundInList(list2, log) &&
      !checkIfCanFoundInList(white_list, log)
    );
  });
  console.log(`unknown logs length: ${unknownLogs.length}`);
  console.log(unknownLogs);
})();
