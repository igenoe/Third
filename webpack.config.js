var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: './app/index.js',
    output:{
        path: __dirname + '/dist',
        filename:'bundle.js',
    },
    module: {
        rules:[
            {test: /\.(js|jsx)$/,use:'babel-loader'},
            {test:/\.css$/,use:['style-loader','css-loader']},
           
        ],
    },
    mode:'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        port: 9028
      }
}