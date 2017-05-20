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
		//new webpack.optimize.UglifyJsPlugin()
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
	devtool: 'inline-source-map',
	devServer: {
		contentBase: __dirname + '/app/'
	}
};