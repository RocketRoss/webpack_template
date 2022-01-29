var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	mode: "development",
	// devtool: "none",
	entry: "./src/main.js",
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",	// 3. <style>
					"css-loader", 	// 2. CSS  -> JS
					"sass-loader"		// 1. SASS -> CSS
				]
			}
		]
	},
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