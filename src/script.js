const theme = document.querySelector("#themeLink");
let darkMode = false;

/**
 * Toggles the website between dark and light mode. This doesn't currently carry between pages which is a big issue
 * because I don't want visitors to have to press the button on each page they visit.
 * @returns Nothing.
 */
function ChangeTheme() {
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    if (darkMode) {
        moon.style.display = "inline";
        sun.style.display = "none";
        darkMode = false;
    } else {
        moon.style.display = "none";
        sun.style.display = "inline";
        darkMode = true;
    }

    document.body.classList.toggle("darkMode")
}

window.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector(".themeButton");
    themeButton.addEventListener("click", ChangeTheme);
});
