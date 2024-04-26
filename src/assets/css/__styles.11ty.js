const path = require("path");
const fs = require("fs");
const postcss = require("postcss");

module.exports = class {
	async data() {
		const cssDir = path.join(__dirname, "..", "css");
		const rawFilepath = path.join(cssDir, "main.css")
		return {
			permalink: `css/main.css`,
			rawFilepath,
			rawCss: fs.readFileSync(rawFilepath),
			eleventyExcludeFromCollections: true
		};
	}

	async render({ rawCss, rawFilepath }) {
		return await postcss([require("postcss-import")])
			.process(rawCss, { from: rawFilepath })
			.then((result) => result.css);
	}
};
