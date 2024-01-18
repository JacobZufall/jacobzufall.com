/**
 * Toggles the website between dark and light mode. This doesn't currently carry between pages which is a big issue
 * because I don't want visitors to have to press the button on each page they visit.
 * @returns void
 */
function ChangeTheme() {

}

window.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector(".themeButton");
    themeButton.addEventListener("click", ChangeTheme);
});
