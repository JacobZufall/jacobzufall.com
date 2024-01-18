let darkMode = false;

/**
 * Checks if dark mode is enabled or not to keep settings consistent across pages.
 * @returns void
 */
function CheckTheme() {
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    if (darkMode) {
        moon.style.display = "inline";
        sun.style.display = "none";
    } else {
        moon.style.display = "none";
        sun.style.display = "inline";
    }
}

/**
 * Toggles the website between dark and light mode. This doesn't currently carry between pages which is a big issue
 * because I don't want visitors to have to press the button on each page they visit.
 * @returns void
 */
function ChangeTheme() {
    if (darkMode) {
        darkMode = false;
        CheckTheme();
    } else {
        darkMode = true;
        CheckTheme();
    }

    document.body.classList.toggle("darkMode")
}

window.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector(".themeButton");
    themeButton.addEventListener("click", ChangeTheme);
});
