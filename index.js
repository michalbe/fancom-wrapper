'use strict';

var args = process.argv;

args = args.slice(2, args.length);

args = args.map(function(arg){
  if (arg.indexOf(' ') > -1) {
    arg = '"' + arg + '"';
  }
  return arg;
});
