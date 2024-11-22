const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.querySelector("button").addEventListener("click", addTask);


function addTask(){
    if(inputBox.value === ''){
        alert("Must add a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

let outputScreen = document.getElementById("outputscreen");

document.querySelectorAll('.calculator button').forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.innerText;
        if(buttonValue === '=') {
            Calculate();
        } else if(buttonValue === 'Cl') {
            Clear();
        } else if(buttonValue === 'DEL') {
            del();
        } else {
            display(buttonValue);
        }
    });
});

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid");
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
import timer from "./timer.js";
new timer(
   document.querySelector("#timer")
);


