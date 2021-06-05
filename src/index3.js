// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-country-selection"),
    input = form.querySelector("option");

const LOCATION_LS = "currentCountry";

function saveCountry(text) {
    localStorage.setItem(LOCATION_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    showCountry(currentValue);
    saveCountry(currentValue);
}

function askForCountry() {
    form.addEventListener("change", handleSubmit);
}

function showCountry(text) {
    input.innerHTML = `${text}`;
}

function loadCountry() {
    const currentCountry = localStorage.getItem(LOCATION_LS);
    if (currentCountry == null) {
        askForCountry();
    } else {
        showCountry(currentCountry);
    }
}

function init() {
    loadCountry();
}

init();
