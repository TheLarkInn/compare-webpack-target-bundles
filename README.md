# compare-webpack-target-bundles
Example of webpack targets bundled into separate bundles.

## Overview

This repo is a super small playground for testing and learning how webpack output "templates" (shape of the bundle), vary between build targets. 
Feel free to use this as you will. Can also serve a purpose for bug reporting. 

## Usage

Clone the repo locally, `cd` into repo and run the following: 

`$ npm install`

`$ npm start`

**Resulting bundles can be seen in the `dist` folder**

## Dist Table of Contents

* [web](https://github.com/TheLarkInn/compare-webpack-target-bundles/tree/master/dist/web)	<== DEFAULT

* [async-node](https://github.com/TheLarkInn/compare-webpack-target-bundles/tree/master/dist/async-node)

* [electron-main](https://github.com/TheLarkInn/compare-webpack-target-bundles/tree/master/dist/electron-main)	

* [node-webkit](https://github.com/TheLarkInn/compare-webpack-target-bundles/tree/master/dist/node-webkit)

* [node](https://github.com/TheLarkInn/compare-webpack-target-bundles/tree/master/dist/node)

* [webworker](https://github.com/TheLarkInn/compare-webpack-target-bundles/tree/master/dist/webworker)

## tl;dr (Show me the config from right here):

```javascript
var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var baseConfig = {  
  target: 'async-node',
  entry: {
    entry: './entry.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'inline',
      filename: 'inline.js',
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveSplittingPlugin({
        minSize: 5000,
        maxSize: 10000
    }),
  ]
};

let targets = ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main'].map((target) => {
  let base = webpackMerge(baseConfig, {
    target: target,
    output: {
      path: path.resolve(__dirname, './dist/' + target),
      filename: '[name].' + target + '.js'
    }
  });
  return base;
});

module.exports = targets;
```
