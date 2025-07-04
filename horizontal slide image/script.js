var scrollContainer = document.querySelector(".app");
var backBtn = document.getElementById("back")
var nextBtn = document.getElementById("next")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 300;
})
backBtn.addEventListener("click", ()=>{

    scrollContainer.scrollLeft -= 300;
})