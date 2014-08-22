#!/usr/bin/env node
'use strict';

var args = process.argv;
var exec = require('child_process').exec;
var path = process.cwd();

if (args.length > 2) {
  args = args.slice(2, args.length);

  args = args.map(function(arg){
    if (arg.indexOf(' ') > -1) {
      arg = '"' + arg + '"';
    }
    return arg;
  });
} else {
  args = [];
}

var run = function(callback) {
  exec(
    'cd ' + path + ';' + __dirname + '/fancom ' + args.join(' '),
    function(error, stdout, stderr) {
      if (error) {
        throw new Error(error);
      }
      callback(error, stdout);
    }
  );
};

run(function(err, status) {
  console.log(status);
});
