var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/uri.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'uri.js',
        publicPath: '/build/',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', "stage-0"]
            }
        }]
    },
    resolve: {
        //modulesDirectories: ["node_modules", "bower_components"],
        /*alias: {
            'babel-editor': path.resolve(__dirname, './babel-editor')
        },*/
        extensions: ['', '.js', '.json', '.jsx']
    }
};