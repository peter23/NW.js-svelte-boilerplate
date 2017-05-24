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
		loaders: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'svelte-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
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