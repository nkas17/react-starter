const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
	entry: `${path.resolve(__dirname, 'src')}/index.jsx`,
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},
	devServer: {
		contentBase: './dist',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/index.html' },
		]),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: `${path.resolve(__dirname, 'src')}`,
				loader: 'babel-loader',
			},
		],
	},
};

module.exports = config;
