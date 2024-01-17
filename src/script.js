let darkMode = false;

/**
 * Toggles the theme between dark and light mode and adjusts elements accordingly.
 *
 * @param makeDark - Whether the site turns dark or light.
 * @returns If the site is in dark mode or not.
 */
function HideSvg(makeDark) {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    if (makeDark) {
        sun.style.display = "inline";
        moon.style.display = "none";
    } else {
        sun.style.display = "none";
        moon.style.display = "inline";
    }

    return makeDark
}

/**
 * Toggles the website between dark and light mode.
 * @returns Nothing.
 */
function ToggleDarkMode() {
    const element = document.body;
    element.classList.toggle("dark_mode");

    // This changes the text accordingly.
    if (!darkMode) {
        darkMode = HideSvg(true)
    } else {
        darkMode = HideSvg(false)
    }
}
