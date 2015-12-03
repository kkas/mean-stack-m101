// Here uses exprots.other, rather than 'module.exports'.
// exports variable is a convinient shorthand for module.exports.
// This will do the same thing if you use 'modules.exports.other'
// The only difference is that you can not directly assign to the
// exports variable.
// Also note that the directory 'test' is ommited. 'require'
// resolves file names relativ eto the current file directory.
exports.other = require('./myotherfile');
