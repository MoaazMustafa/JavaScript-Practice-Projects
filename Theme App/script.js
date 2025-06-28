const button = document.querySelector("nav ul li button");
const body = document.querySelector("body");
function theme(){
   if (button.innerHTML === "Dark"){
    button.innerHTML = "Light"
    body.classList.add("body")

   }
   else{
    button.innerHTML = "Dark"
    body.classList.remove("body")
   }
}
button.addEventListener("click", theme)