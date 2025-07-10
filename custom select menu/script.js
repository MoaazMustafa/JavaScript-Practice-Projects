const selectField = document.querySelector("#selectField");
const text = document.querySelector(".p");
const options = document.querySelectorAll(".options"); 
const list = document.querySelector("#list"); 

selectField.onclick = function(){
    list.classList.toggle("hide")
}
options.forEach(option => {
  option.onclick = function () {
    text.innerHTML = this.textContent;
     list.classList.add("hide");
  };
});
