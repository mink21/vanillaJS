import "./styles.css";
/*
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

// You're gonna need this
function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const date = new Date();
    let diff = (xmasDay - date) / 1000;
    const days = Math.ceil(diff / (60 * 60 * 24)) - 1;
    diff = diff - days * 60 * 60 * 24;
    const hours = Math.ceil(diff / (60 * 60)) - 1;
    diff = diff - hours * 60 * 60;
    const minutes = Math.ceil(diff / 60) - 1;
    diff = diff - minutes * 60;
    const seconds = Math.ceil(diff);
    clockTitle.innerText = `${days < 10 ? `0${days}` : days}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}*/

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// You're gonna need this
function getTime() {
    // Don't delete this.
    const date = new Date();
    const hours = date.getHours;
    const minutes = date.getMinutes;
    const seconds = date.getSeconds;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}: ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
