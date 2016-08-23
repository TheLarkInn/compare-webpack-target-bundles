var path = require('path');
var webpack = require('webpack');

let baseConfig = {  
  entry: {
    entry: './entry.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
};

let targets = ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main'].map((target) => {
  let base = JSON.parse(JSON.stringify(baseConfig));
  base.target = target; 
  base.output.path = path.resolve(__dirname, './dist/' + target);
  base.output.filename = '[name].' + target + '.js';
  return base; 
})

debugger;

module.exports = targets;