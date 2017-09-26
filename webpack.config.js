var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		js: './src/js/common.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js')
	},
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},
		// {
		// 	test: /\.scss$/,
		// 	loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
		// },
		// {
		// 	test: /\.css$/,
		// 	loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		// },
		{
			test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
			loader: 'file-loader'
		}
		]
	},
	plugins: [
	// new ExtractTextPlugin('style.css', {
	// 	allChunks: true
	// }),
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		Popper: ['popper.js', 'default']
	})
	]

};