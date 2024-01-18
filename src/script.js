/**
 * This function checks localStorage to see what theme is currently enabled. If no theme is found, the default is made
 * to match the user's preference. The theme will default to light if all else fails.
 * @returns If dark mode is enabled or not.
 */
function CheckThemeMode(preferredMode = "light") {
    const browserTheme = localStorage.getItem("browserTheme");
    let darkModeEnabled;

    if (!browserTheme) {
        // I need to figure out a way to run this function based on the @media rule, but I have no idea how to fire it.
        if (preferredMode === "dark") {
            localStorage.setItem("browserTheme", "dark");
            darkModeEnabled = true;
        } else {
            localStorage.setItem("browserTheme", "light");
            darkModeEnabled = false;
        }
    }

    return darkModeEnabled;
}

/**
 * Updates the page to reflect the current theme settings.
 * @returns void
 */
function UpdateTheme() {
    const browserTheme = localStorage.getItem("browserTheme");

    if (browserTheme === "dark") {
        document.body.classList.add("darkMode");
    } else if (document.body.classList.contains("darkMode")) {
        document.body.classList.remove("darkMode");
    }
}

/**
 * Toggles the website between dark and light mode. This doesn't currently carry between pages which is a big issue
 * because I don't want visitors to have to press the button on each page they visit.
 * @returns void
 */
function ChangeTheme() {
    // Checks what the current theme is and then changes it to the opposite.
    if (CheckThemeMode()) {
        localStorage.setItem("browserTheme", "dark");
    } else {
        localStorage.setItem("browserTheme", "light");
    }

    UpdateTheme();
}


window.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector(".themeButton");
    themeButton.addEventListener("click", ChangeTheme);
});
