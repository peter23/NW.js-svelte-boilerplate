const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
		new MiniCssExtractPlugin({filename: '[name].css'})
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true,
					},
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						}
					}
				]
			},
		]
	},
	target: 'node-webkit',
	devtool: 'source-map',
	mode: 'development',
	devServer: {
		contentBase: __dirname + '/app/'
	},
	externals: {
		setImmediate: 'global.setImmediate',
	},
};