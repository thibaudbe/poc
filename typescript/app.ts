// Initialize
// require('typescript-require');

// Get functions.ts
// var funcs = require('./funcs.ts');
// console.log(funcs.lowercase('HELLO!'));


const funcs = {
  lowercase: (val: string) => {
    return val.toLowerCase();
  },
  uppercase: (val: string) => {
    return val.toUpperCase();
  }
};

console.log(funcs.lowercase('HELLO!'));
