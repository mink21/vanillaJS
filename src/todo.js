import "./styles.css";

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    pendingToDoList = document.querySelector(".js-pendingToDoList"),
    finishedToDoList = document.querySelector(".js-finishedToDoList");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

let pendingToDos = [];
let finishedToDos = [];

function moveToDo(event) {
    deleteFinishedToDo(event);
    const btn = event.target;
    const li = btn.parentNode;
    paintPendingToDo(li.querySelector("span").innerHTML);
}

function finishToDo(event) {
    deletePendingToDo(event);
    const btn = event.target;
    const li = btn.parentNode;
    paintFinishedToDo(li.querySelector("span").innerHTML);
}

function deletePendingToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingToDoList.removeChild(li);
    const cleanToDos = pendingToDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    pendingToDos = cleanToDos;
    savePendingToDos();
}

function deleteFinishedToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedToDoList.removeChild(li);
    const cleanToDos = finishedToDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    finishedToDos = cleanToDos;
    saveFinishedToDos();
}

function savePendingToDos() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingToDos));
}

function saveFinishedToDos() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedToDos));
}

function paintPendingToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = pendingToDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deletePendingToDo);
    finBtn.innerHTML = "✅";
    finBtn.addEventListener("click", finishToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);
    li.id = newId;
    pendingToDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    pendingToDos.push(toDoObj);
    savePendingToDos();
}

function paintFinishedToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const moveBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = finishedToDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteFinishedToDo);
    moveBtn.innerHTML = "⬅️";
    moveBtn.addEventListener("click", moveToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moveBtn);
    li.id = newId;
    finishedToDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    finishedToDos.push(toDoObj);
    saveFinishedToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintPendingToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const pendingLoadedToDos = localStorage.getItem(PENDING_LS);
    if (pendingLoadedToDos !== null) {
        const parsedPendingToDos = JSON.parse(pendingLoadedToDos);
        parsedPendingToDos.forEach(function (toDo) {
            paintPendingToDo(toDo.text);
        });
    }
    const finishedLoadedToDos = localStorage.getItem(FINISHED_LS);
    if (finishedLoadedToDos !== null) {
        const finishedParsedToDos = JSON.parse(finishedLoadedToDos);
        finishedParsedToDos.forEach(function (toDo) {
            paintFinishedToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
