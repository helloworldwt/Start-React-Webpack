var webpack = require('webpack');
var WebpackShellPlugin = require('webpack-shell-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [
            "webpack-dev-server/client?http://0.0.0.0:80",
            "webpack/hot/only-dev-server",
            './src/app/index.js'
        ],
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'antd'
        ]
    },

    output: {
        path: __dirname + '/public/static/build/',
        filename: '[name].min.js',
        chunkFilename: '[id].chunk.min.js',
        publicPath: '/static/build/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [
                'react-hot',
                'babel?' +
                'presets[]=react,' +
                'presets[]=es2015,' +
                'presets[]=stage-0,' +
                'plugins[]=transform-class-properties'
            ]
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url'
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            'vendors', 'vendors.min.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index_dev.html',
            template: 'src/html/index_dev.html'
        }),
        new WebpackShellPlugin({
            onBuildStart: [""],
            onBuildEnd: ["sleep 3 && cp ./public/static/build/index_dev.html ./public/index.html"]
        })
    ]
};
