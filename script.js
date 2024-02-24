const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
if(inputBox.value === ''){
    alert("Write something before adding")
} else{
    let li =document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputBox.value ='';
saveData();
}

listContainer.addEventListener("click",function(E){
    if(E.target.tagName === "LI"){
        E.target.classList.toggle("checked");
        saveData();
    } else if(E.target.tagName === "SPAN"){
        E.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
} 

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();