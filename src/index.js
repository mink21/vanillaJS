// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should czhange when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.getElementsByTagName("h2");

const superEventHandler = {
    handleMouseEnter: function () {
        title[0].innerHTML = "The mouse is here!";
        title[0].style.color = colors[0];
    },
    handleMouseLeave: function () {
        title[0].innerHTML = "The mouse is gone!";
        title[0].style.color = colors[1];
    },
    handleResize: function () {
        title[0].innerHTML = "You just resized!";
        title[0].style.color = colors[2];
    },
    handleRightClick: function () {
        title[0].innerHTML = "That was a right click!";
        title[0].style.color = colors[4];
    }
}

title[0].addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title[0].addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("click", superEventHandler.handleRightClick);
