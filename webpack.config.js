const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': [ './src/index' ]
	},
	resolve: {
		extensions: [ '.js', '.html' ]
	},
	output: {
		path: __dirname + '/app/',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'svelte-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?sourceMap'
				})
			},
		]
	},
	target: 'node-webkit',
	devtool: 'source-map',
	devServer: {
		contentBase: __dirname + '/app/'
	}
};