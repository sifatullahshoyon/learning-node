// local modules
const myModule = require('./local-1');
// destructuring
const {a,add} = require('./local-1');
const {a : a2 ,add : add2} = require('./local-2'); // name aliases

// console.log(add2(5,18,5));
// console.log(a);


// built-in-modules

const path = require("path");

console.log(path.dirname("/F:/sifat/level-2/mission-2/learning-node/index.js"));