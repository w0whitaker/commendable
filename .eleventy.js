module.exports = function (eleventyConfig) {
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
