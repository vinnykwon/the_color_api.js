# the_color_api.js
Web-API for [thecolorapi.com](https://www.thecolorapi.com/) your fast, modern, swiss army knife for color. Color conversion, naming, schemeing, and placeholders. [Source](https://github.com/joshbeckman/thecolorapi)

## Example
```JavaScript
async function main() {
	const { TheColorApi } = require("./the_color_api.js")
	const theColorApi = new TheColorApi()
	const colorInfo = await theColorApi.getColor("params")
	console.log(colorInfo)
}

main()
```
