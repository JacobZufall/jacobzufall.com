const theme = document.querySelector("#themeLink");
const darkMode = "css/dark-mode.css";
const lightMode = "css/light-mode.css";

/**
 * Toggles the website between dark and light mode.
 * @returns Nothing.
 */
function ChangeTheme() {
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    if (theme.getAttribute("href") === lightMode) {
        theme.href = darkMode;
        sun.style.display = "inline";
        moon.style.display = "none";
    } else {
        theme.href = lightMode;
        sun.style.display = "none";
        moon.style.display = "inline";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector(".themeButton");
    themeButton.addEventListener("click", ChangeTheme);
});
