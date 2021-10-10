- `$ mkdir src`
- `$ mkdir src/assets`
- `$ mkdir src/css`
- `$ mkdir src/html`
- `$ mkdir src/js`
- `$ touch src/main.js`
- `$ npm init -y`

Added `"private": true` to package.json.

- `$ npm install --save-dev webpack webpack-cli`

Added the `"build": "webpack"` task to `package.json["scripts"]`.

- `$ touch webpack.config.js`

	Filled as follows, and append `--config webpack.config.js` to the `package.json["scripts"]["build"]` task.
	```
	const path = require("path");

	module.exports = {
		mode: "development",
		// devtool: "none",
		entry: "./src/index.js",
		output: {
			filename: "main.js",
			path: path.resolve(__dirname, "dist")
		}
	}
	```

- `$ npm install --save-dev html-webpack-plugin`

	Expanded the `webpack.config.js`:
	```
	var HtmlWebpackPlugin = require('html-webpack-plugin');
	...
	module.exports = {
		...
		output: {
			...
			filename: "main.[contenthash].js"
			...
		}
		...
		plugins: [
			new HtmlWebpackPlugin({
					template: "./src/html/index.html"
				})
		],
		...
	}
	```

- `$ npm install --save-dev webpack-merge`

	Created `webpack.prod.js`:
	```
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
	```

	Created `webpack.dev.js`:
	```
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
	```

	Changed `package.json["scripts"]["build"]` to use `webpack.prod.js`.

- `$ npm install --save-dev webpack-dev-server`

	Added the `"dev-serve": "webpack serve --config webpack.dev.js --open"` task to `package.json["scripts"]`.