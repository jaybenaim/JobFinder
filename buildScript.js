// this file is used to compile the frontend Angular app and move the output to the server folder for later deployment.
const fs = require("fs");
const fse = require("fs-extra");
const childProcess = require("child_process");

if (fs.existsSync("./dist")) {
  fse.removeSync("./dist");
}

childProcess.execSync("ng build", { stdio: "inherit" });

fse.moveSync("./build", "./server/dist", { overwrite: true });
