'use strict';

var args = process.argv;
var exec = require('child_process').exec;
var path = process.cwd();

args = args.slice(2, args.length);

args = args.map(function(arg){
  if (arg.indexOf(' ') > -1) {
    arg = '"' + arg + '"';
  }
  return arg;
});

var run = function(callback) {
  exec(
    'cd ' + path + ';fcm ' + args.join(' '),
    function(error, stdout, stderr) {
      if (error) {
        throw new Error('Somethings wrong.');
      }
      callback(error, 'Fancom OK.');
    }
  );
};

run(function(status) {
  console.log(status);
});
