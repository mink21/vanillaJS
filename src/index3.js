// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector(".js-country-selection"),
    options = select.options;

const LOCATION_LS = "currentCountry";

function handleChange(event) {
    const currentValue = event.target.value;
    localStorage.setItem(LOCATION_LS, currentValue);
    chooseCountry(currentValue);
}

function chooseCountry(text) {
    for (let i = 0; i < options.length; i++) {
        if (text === options[i].value) {
            options[i].setAttribute("selected", "true");
        }
    }
}

function askForCountry() {
    select.addEventListener("change", handleChange);
}

function loadCountry() {
    const currentCountry = localStorage.getItem(LOCATION_LS);
    if (currentCountry == null) {
        askForCountry();
    } else {
        chooseCountry(currentCountry);
    }
}

function init() {
    loadCountry();
}

init();

/*
import "./styles.css";

const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}

loadCountries();
select.addEventListener("change", handleChange);

*/