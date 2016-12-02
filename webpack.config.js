var webpack = require('webpack');
var WebpackShellPlugin = require('webpack-shell-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/app/index.js',
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'antd'
        ]
    },

    output: {
        path: __dirname + '/public/static/build',
        filename: '[name].min-[chunkhash].js',
        chunkFilename: '[id].chunk.min-[chunkhash].js',
        publicPath: '/static/build/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ["transform-class-properties"]
            }
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
         //合并公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            filename: "vendors.min-[chunkhash].js",
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new HtmlWebpackPlugin({
            filename: 'index_test.html',
            template: 'src/html/index_test.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index_slave.html',
            template: 'src/html/index_slave.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index_prod.html',
            template: 'src/html/index_prod.html'
        }),
        new WebpackShellPlugin({
            onBuildStart: [""],
            onBuildEnd: [""]
        })
    ]
};
