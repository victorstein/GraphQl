const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './src/server.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()],
    stats: {
        colors: true
    },
    mode: 'development'
};
