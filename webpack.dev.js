const path = require("path");
const Merge = require("webpack-merge");
const baseconfig = require("./webpack.config");

module.exports = Merge.merge(baseconfig, {
		mode: "development",
		// devtool: "none",
		module: {
			rules: [
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
			filename: "[name].js",
			path: path.resolve(__dirname, "dist")
		} 
	}
)