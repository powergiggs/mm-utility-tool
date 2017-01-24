const chalk = require('chalk');

function debug (title, object, status){
  if(process.env.DEBUG === 'true'){
  const sep = '\n==============DEBUGGING=============\n';
  const out = sep + title + sep;
  const date = new Date().toLocaleString();
  // color variables
  const success = chalk.green;
  const error = chalk.red;
  const assist = chalk.yellow;
  const blueb = chalk.bold.blue;

  // store the message content
  const messageTitle = out;
  const messageBody = object;
  const messageStatus = status.toLowerCase();

  if(!messageTitle){
    messageTitle = 'No msg title enter'
  }

  if(!messageBody){
    messageTitle = 'No msg body'
  }

  const messageFormat = `${out} MSG: "${messageBody}" \n\nTIME: ${date}`;
  //console.log(messageFormat);

  switch(messageStatus){
    case 'error!':
    case 'error':
    case 'err':

    console.error(error('\n' + messageStatus + ' ' + messageFormat + '\n'));
    break;
    case 'success!':
    case 'success':
    //messageStatus = 'success';
    console.log(success('\n'+ messageStatus + ' ' + messageFormat + '\n'));
    break;

    case 'warn':
    case 'warning!':
    case 'warning':
    //messageStatus = 'warning';
    console.warn(blueb('\n'+ messageStatus + ' ' + messageFormat + '\n'));
    break;


    }

  };
};

  // debug
exports.debug = debug;
