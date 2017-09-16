const path = require('path');
const ngToolsWebpack = require('@ngtools/webpack');
const webpack = require('webpack');
const ROOT = require('./webpack.helper.js').root;

console.log('SERVER SIDE CONFIG');

module.exports = {

    devtool: 'source-map',

    entry: './server/server.ts',

    output: {
    	path: ROOT + '/compiled/',
        filename: 'server.js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    target: 'node',

    module: {
        rules: [

            {
                test: /\.ts$/,
                use: '@ngtools/webpack',
                exclude: [path.join(ROOT, 'src/main-aot.ts')],
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /favicon.ico$/,
                use: 'file-loader?name=/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(ROOT, 'src/styles/')
                ],

                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },

            {
                test: /\.scss$/,
                exclude: [
                    path.join(ROOT, 'src/styles/')
                ],
                
                use: [
                    'raw-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ],

        exprContextCritical: false
    },
    
    plugins: [

  	new ngToolsWebpack.AotPlugin({
            tsConfigPath: './src/tsconfig.server.json'
        }),
    ]
};
