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
	devServer: {
		contentBase: __dirname + '/dist',
		compress: false,
		port: 3001,
		host: '127.0.0.1',
		disableHostCheck: true,
		historyApiFallback: true,
		open: true,
		// proxy: {
		//     '/#': {
		//         target: 'http://192.168.5.196/v1/login',
		//         changeOrigin: true,
		//         secure: false
		//     }
		// },
		// headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": "true"}
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