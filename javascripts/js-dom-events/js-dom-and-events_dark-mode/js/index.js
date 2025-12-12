console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const DarkMode = document.querySelector('[data-js="dark-mode-button"]');

const LightMode = document.querySelector('[data-js="light-mode-button"]');

const ToggleButton = document.querySelector('[data-js="toggle-button"]');


DarkMode.addEventListener("click", ()=> {
    bodyElement.classList.add("dark");
});
LightMode.addEventListener("click", ()=> {
    bodyElement.classList.remove("dark");

});
ToggleButton.addEventListener("click", ()=> {
    bodyElement.classList.toggle("dark");
});