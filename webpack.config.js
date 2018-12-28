const path = require('path');

// 第二种配置 1
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output:{
		path: path.join(__dirname, './dist/'),
		filename: 'bundle.js'
	},
	// 第二种配置 2
	// devServer: {
	// 	open: true,
	// 	port: 3000,
	// 	hot: true,
	// 	contentBase: 'src'
	// },
	plugins: [
	// 第二种配置 3
		new webpack.HotModuleReplacementPlugin(),

		new htmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|gif|bmp|png)$/,
				use: 'url-loader?limit=90&name=[hash:8]-[name].[ext]'
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: 'url-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			}
		]
	}
}