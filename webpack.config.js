var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	mode: "development",
	// devtool: "none",
	entry: "./src/index.js",
	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html"
		})
	]
}