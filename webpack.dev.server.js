var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.DEV');

var port = 80
new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
}).listen(port, 'localhost', function (err, result) {
    console.log('Listening at http://localhost:' + port)
});