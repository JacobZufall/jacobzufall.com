/**
 * This function checks localStorage to see what theme is currently enabled. If no theme is found, the default is made
 * to match the user's preference.
 * @returns True if dark mode is enabled and false if it isn't.
 */
function CheckThemeMode(preferredMode = "light") {
    const browserTheme = localStorage.getItem("browserTheme");

    if (!browserTheme) {
        // I need to figure out a way to run this function when they change the page, but I'm not sure how.
        if (preferredMode === "dark") {
            localStorage.setItem("browserTheme", "dark");
            return true;
        } else {
            localStorage.setItem("browserTheme", "light");
            return false;
        }
    } else switch ("dark") {
        case browserTheme:
            return true;
        // Default is light mode. If I ever make more than two themes this will need to be fixed.
        default:
            return false;
    }
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
