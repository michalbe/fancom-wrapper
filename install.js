'use strict';

var https = require('https');
var fs = require('fs');
var each = require('async').each;
var destination = __dirname + '/libs/';
var url = 'https://raw.githubusercontent.com/michalbe/fancom/master/';
var files = [ 'fancom', '.emo' ];

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(function() {
        cb();
      });
    });
  });
};

module.exports = function(callback) {
  each(
    files,
    function(file, cb){
      download(url + file, destination + file, cb);
    },
    function(data){
      callback(data);
    }
  );
};


module.exports(function(elo){
  console.log(elo);
});
