#!/usr/bin/env node

const program = require('commander');
const { startServer } = require('./lib/server');

program
  .version('1.0.4')
  .option('-f, --file [file]', 'sequence file')
  .option('-t, --theme [theme]', 'theme', 'hand')
  .parse(process.argv);

if (!program.file) {
  program.help((txt) => {
    console.error('should specify the seq file!');
    return txt;
  });
}
const options = {
  file: program.file,
  theme: program.theme
};
startServer(options);


