#!/usr/bin/env node
var occupied = require('./App'),
chalk = require('chalk');
(async () => {
if(await occupied(process.argv[2])) console.log(chalk.bold.redBright('Yup its occupied'))
else console.log(chalk.bold.greenBright('Yay you can take it'))
})();
