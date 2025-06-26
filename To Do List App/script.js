const input = document.querySelector(".input-form input");
const btn = document.querySelector(".input-form button");
const list = document.querySelector(".container ul li");
const ul = document.querySelector(".container ul ");
function addTask(event) {
    event.preventDefault();
    if (input.value == "") {
        alert("Please Enter a task to continue")

    }
    else {


        const list = document.createElement("li");
        list.innerHTML = input.value;
      
        const span = document.createElement("span");
        span.innerHTML = "Delete";
        list.appendChild(span);
        document.querySelector(".container ul").appendChild(list);
        input.value = "";
        saveData();
    }
}
ul.addEventListener("click", function (a) {
    if (a.target.tagName === "LI" || a.target.tagName === "h2") {
        a.target.classList.toggle("checked");
        saveData();
    }
    else if (a.target.tagName == "SPAN") {
        a.target.parentElement.remove();
        saveData();
    }

})

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}
function showData(){
    ul.innerHTML= localStorage.getItem("data");
}
showData();