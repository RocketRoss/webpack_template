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