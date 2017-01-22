const chalk = require('chalk');
const fs = require('fs');


const utility = (title, object, status) => {
  const sep = '\n***********************\n';
  const out = sep + title + sep;
};

const success = chalk.bold.white.bgGreen;
const error = chalk.bold.white.bgRed;
const assist = chalk.bold.white.bgMagenta;

function logSuccess(out, object, status) {
  if (process.env.DEBUG) {
    console.log(success(out, object, status));
    // log to file
    fs.appendFile('./logs', (out, object, status));
  }
}

function logError(out, object, status) {
  if (process.env.DEBUG) {
    console.log(error(out, object, status));
      // log to file
    fs.appendFile('./logs', (out, object, status));
  }
}

function logAssist(out, object, status) {
  if (process.env.DEBUG) {
    console.log(assist(out, object, status));
      // log to file
    fs.appendFile('./logs', (out, object, status));
  }
}

  // debug
exports.logSuccess = logSuccess;
exports.logError = logError;
exports.logAssist = logAssist;
