module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/assets/")
	return {
		passthroughFileCopy: true,
		dir: {
			input: "src",
			includes: "_includes",
			data: "_data",
			output: "_site",
			templateFormats: ["njk", "md", "11ty.js"]
		},
	};
};
