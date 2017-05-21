const webpack = require('webpack');

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
	],
	module: {
		loaders: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'svelte-loader'
			}
		]
	},
	target: 'node-webkit',
	devtool: 'source-map',
	devServer: {
		contentBase: __dirname + '/app/'
	}
};