module.exports = {
	extends: [
		"@studiohyperdrive/stylelint-config",
		"@studiohyperdrive/stylelint-config/lib/sass"
	],
	rules: {
		"sh-waqar/declaration-use-variable": [["/color/", "z-index", "font-size", { ignoreValues: ["transparent", "inherit", "initial", "/rem/", "/layer/"] }]],
	}
};
