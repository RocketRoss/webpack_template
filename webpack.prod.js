const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Merge = require("webpack-merge");
const baseconfig = require("./webpack.config");

module.exports = Merge.merge(baseconfig, {
		mode: "production",
		// devtool: "none",
		output: {
			assetModuleFilename: "./assets/[name].[hash].[ext]",
			filename: "[name].[chunkhash].js",
			path: path.resolve(__dirname, "dist")
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,	// 3. CSS -> files
						"css-loader", 	// 2. CSS  -> JS
						"sass-loader"		// 1. SASS -> CSS
					]
				}
			]
		},
		optimization: {
			minimizer: [
				`...`,
				new CssMinimizerPlugin(),
			],
		},
		plugins: [
			new CleanWebpackPlugin.CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: "[name].[chunkhash].css"
			})
		]
	}
)