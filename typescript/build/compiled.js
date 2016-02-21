// Initialize
// require('typescript-require');
// Get functions.ts
// var funcs = require('./funcs.ts');
// console.log(funcs.lowercase('HELLO!'));
var funcs = {
    lowercase: function (val) {
        return val.toLowerCase();
    },
    uppercase: function (val) {
        return val.toUpperCase();
    }
};
console.log(funcs.lowercase('HELLO!'));
