var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	mode: "development",
	// devtool: "none",
	entry: {
		main: "./src/main.js",
		vendor: "./src/vendor.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			}
		]
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html"
		})
	]
}