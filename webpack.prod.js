const path = require("path");
const Merge = require("webpack-merge");
const baseconfig = require("./webpack.config");

module.exports = Merge.merge(baseconfig, {
		mode: "production",
		// devtool: "none",
		output: {
			filename: "[name].[chunkhash].js",
			path: path.resolve(__dirname, "dist")
		} 
	}
)