const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
	entry: {
		index: path.join(__dirname, 'src', 'index.js'),
		home: path.join(__dirname, 'src', 'javascript', 'home.js'),
		about: path.join(__dirname, 'src', 'javascript', 'about.js'),
		gallery: path.join(__dirname, 'src', 'javascript', 'gallery.js'),
		contact: path.join(__dirname, 'src', 'javascript', 'contact.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				options: {
					partialDirs: [path.join(__dirname, 'src', 'pages', 'partials')],
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.hbs'),
			filename: path.join(__dirname, 'dist', 'index.html'),
			chunks: ['index', 'home'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pages', 'about.hbs'),
			filename: path.join(__dirname, 'dist', 'about.html'),
			chunks: ['index', 'about'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pages', 'gallery.hbs'),
			filename: path.join(__dirname, 'dist', 'gallery.html'),
			chunks: ['index', 'gallery'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pages', 'contact-us.hbs'),
			filename: path.join(__dirname, 'dist', 'contact.html'),
			chunks: ['index', 'contact'],
		}),
	],
};
