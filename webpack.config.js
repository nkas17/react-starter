const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},
	entry: {
		app: './src/index.jsx',
	},
	devServer: {
		contentBase: './dist',
	},
	module: {
		loaders: [{
			test: /\.jsx?/,
			include: path.resolve(__dirname, 'src'),
			loader: 'babel-loader',
		}],
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/index.html' },
		]),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

module.exports = config;
