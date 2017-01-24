## Utility Tool
Deployment of Web Applications

## Installation
download repo and navigate to folder with terminal
run

`` npm install ``

## Usage

###Debug
the debug too take 3 arguments
a title, body and status, status has three option error,
success and warning see sample usage DEBUG should also be `true`
```
const util = require('./utility-tool.js');
const test = util.debug('my warning', 'stuff', 'error');

```
#### Sample Debugging msg
```
error
==============DEBUGGING=============
MY warning
==============DEBUGGING=============
 MSG: "this is debugging tool"

TIME: 1/24/2017, 2:14:45 AM

```


### Version Bump
Version bump accept 2 arguments, the Version
and a type argument to increment the Version,
then return a version number as a string.

Using Version Bump:
```
const util = require('./debug-util');
const patch = util.verBump('3.3.3', 'patch');
const minor = util.verBump('3.3.3', 'minor');
const major = util.verBump('3.3.3', 'major');
```



## From Git
```sh
npm install mm-utility-tool --sav-dev
```

## Usage

##Debugging
###Logs will be found in ./log file

## start up server in debug mode by adding
```sh
DEBUG=true
```
