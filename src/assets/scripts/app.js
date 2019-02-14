let activeTheme = "themeLight";

// This needs to happen before the DOM renders to prevent flickering
setActiveStyleSheet(activeTheme);

window.addEventListener("load", function (event) {
	// console.log("All resources finished loading!");
	init();
});

function init() {
	const themeToggleButton = document.querySelector(".theme-toggle-btn");

	themeToggleButton.addEventListener("click", () => {
		activeTheme = activeTheme === "themeLight" ? "themeDark" : "themeLight";
		setActiveStyleSheet(activeTheme);
	});
}

function setActiveStyleSheet(title) {
	const linkElements = document.getElementsByTagName("link");

	for (let i = 0; i < linkElements.length; i++) {
		const linkEl = linkElements[i];

		linkEl.disabled = true;

		if (linkEl.getAttribute("rel").indexOf("style") !== -1 && linkEl.getAttribute("title")) {
			linkEl.disabled = !(linkEl.getAttribute("title") === title);
		}
	}
}
