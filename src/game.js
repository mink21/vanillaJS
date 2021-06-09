// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.getElementById("js-range"),
    maxNumber = range.querySelector("input"),
    instruction = range.querySelector("h2"),
    text = document.getElementById("js-text"),
    btn = document.getElementById("js-button"),
    choice = document.getElementById("js-choice");

const COMPNUM_LS = "compNumber";
const MYNUM_LS = "myNumber";

function runGame() {
    const compNum = localStorage.getItem(COMPNUM_LS);
    const myNum = localStorage.getItem(MYNUM_LS);
    if (compNum === myNum) {
        choice.innerHTML = `You chose: ${myNum}, the machine chose ${compNum}. You win!`;
    } else {
        choice.innerHTML = `You chose: ${myNum}, the machine chose ${compNum}. You lost!`;
    }
}

function handleButtonSubmit(event) {
    runGame();
}

function saveMyNum(text) {
    localStorage.setItem(MYNUM_LS, text);
}

function handleTextSubmit(event) {
    event.preventDefault();
    const currentValue = text.value;
    saveMyNum(currentValue);
}

function readGuess() {
    text.addEventListener("change", handleTextSubmit);
    btn.addEventListener("click", handleButtonSubmit);
}

function saveCompNum(text) {
    localStorage.setItem(COMPNUM_LS, text);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function paintMax(text) {
    instruction.innerHTML = `Generate a number between 0 and ${text}`;
}

function handleRange(event) {
    const currentValue = maxNumber.value;
    paintMax(currentValue);
    const CompNum = getRandomIntInclusive(0, currentValue);
    saveCompNum(CompNum);
}

function init() {
    const CompNum = getRandomIntInclusive(0, 100);
    saveCompNum(CompNum);
    range.addEventListener("input", handleRange);
    readGuess();
}

init();
