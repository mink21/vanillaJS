// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function handleResize() {
    var w = window.innerWidth;
    if (w < 300) {
        document.body.style.backgroundColor = "blue";
    } else if (w > 600) {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "purple";
    }
}

function init() {
    document.body.style.backgroundColor = "purple";
    window.addEventListener("resize", handleResize);
}

init();
