const button = document.querySelector("button");
const input = document.querySelector("input");
const image = document.querySelector("img");
const apiURL = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

async function GenerateQRCode() {
    if (input.value.length > 0) {
        image.src = apiURL + input.value.replace(/ /g, "+");
        image.style.display = "block";
        input.value = "";
    }
    else{
        alert("Please Enter Text Or URL")
    }

}
console.log(input.value.replace(/ /g, "+"));