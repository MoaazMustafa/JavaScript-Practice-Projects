const length = 18;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = `~!@#$%^&*()_+-={}[]|\:;<>?,./'`;

const input = document.querySelector(".bar input");
const submitBtn = document.querySelector(".btn");
const copyBtn = document.querySelector(".bar button");

const allChars = upperCase + lowerCase + numbers + specialChar;

function creatPassword(event) {
    event.preventDefault();
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    console.log(password)
    input.value = password;
}
submitBtn.addEventListener("click", creatPassword);
 function copyPassword(event){
     event.preventDefault()
    input.select()
    document.execCommand("copy")
 };
copyBtn.addEventListener("click", copyPassword)