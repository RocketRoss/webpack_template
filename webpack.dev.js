const path = require("path");
const Merge = require("webpack-merge");
const baseconfig = require("./webpack.config");

module.exports = Merge.merge(baseconfig, {
		mode: "development",
		// devtool: "none",
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist")
		} 
	}
)