var path = require('path');
var fs = require('fs');


module.exports = function() {
  
  // http://jlongster.com/Backend-Apps-with-Webpack--Part-I
  var nodeModules = {};
  fs.readdirSync('node_modules')
    .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    });

  return nodeModules;

};
