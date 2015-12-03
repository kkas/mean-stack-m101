// this is the main entry file and has access to all the other files.

// By default in NodeJS, all the files have their own scopes and the code in a file are not
// accessible by other files outside.
// Using global variables to share code is almost always mistake.
// Instead, 'require' function is a great way to share code between files.

// myfile.js
var fn = require('./myfile.js');
fn();

// test directory.
// NodeJS looks a index.js file in this directory.
// So, `require('./test')` is equivalent to `require('./test/index.js')`
var otherFn = require('./test').other;
otherFn();
