
const is_dev_server = process.argv[1].match(/webpack-dev-server/);


const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


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
	target: 'node-webkit',
	mode: is_dev_server ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: is_dev_server ? true : false,
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
							sourceMap: is_dev_server ? true : false,
						}
					}
				]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: '[name].css'}),
		is_dev_server ? ()=>{} : new OptimizeCssAssetsPlugin()
	],
	externals: {
		setImmediate: 'global.setImmediate',
	},
	devtool: is_dev_server ? 'cheap-module-eval-source-map' : false,
	devServer: {
		contentBase: __dirname + '/app/'
	},
};
