"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (data) {
  return data.map(function (item) {
    return "" + item.label + " use to " + item.value;
  });
};

module.exports = exports["default"];
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

var _data = require('./data');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var hostname = '127.0.0.1';
var port = 1337;

_http2['default'].createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end((0, _action2['default'])([_data.cat, _data.dog]).join('\n'));
}).listen(port, hostname, function (_) {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var cat = {
  label: 'Cat',
  value: 'meowwww'
};

exports.cat = cat;
var dog = {
  label: 'Dog',
  value: 'barkkk'
};
exports.dog = dog;
