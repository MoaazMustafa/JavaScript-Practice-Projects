const box = document.querySelector(".box")
const div = document.querySelector(".div")
const img = document.querySelector(".original")
const span = document.querySelector("span")

img.style.width = box.offsetWidth +"px";

var leftSpace = box.offsetLeft;

box.onmousemove = function (e){
    var boxWidth = ( e.pageX-leftSpace) + "px";
    div.style.width = boxWidth
    span.style.left = boxWidth

}