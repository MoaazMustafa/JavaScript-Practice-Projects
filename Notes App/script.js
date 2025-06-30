const creatBtn = document.querySelector(".container .button");
const delBtn = document.querySelector(".container .notes-container .input-box img");
const container = document.querySelector(".container .notes-container ");

function updateStorage() {
    localStorage.setItem("notes", container.innerHTML)
}
function getFromStorage() {
    container.innerHTML = localStorage.getItem("notes");
}
getFromStorage();
function creatNote() {
    const pTag = document.createElement("p");
    pTag.classList.add("input-box")
    pTag.setAttribute("contenteditable", "true");
    pTag.setAttribute("spellcheck", "false");
    container.appendChild(pTag);
    const delBtn = document.createElement("img");
    delBtn.src = "../images/delete.png";
    pTag.appendChild(delBtn);
    updateStorage()
}

container.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".container .notes-container .input-box ");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }

        });
    }

})

document.addEventListener("keydown", event=>{
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

