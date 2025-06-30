const input = document.querySelector(".bar input");
const msg = document.querySelector(".msg");
const strength = document.querySelector(".strength");
const bar = document.querySelector(".bar");

input.addEventListener('input', () => {
    if (input.value.length > 0) {
        msg.style.display = "block";
        msg.style.color = "red";
        strength.innerHTML = "Week";
        bar.style.border = "solid 1px red";
    }
     else {
        msg.style.display = "none";
        bar.style.border = "solid 1px #fff";
    }
    if (input.value.length > 4) {
        msg.style.color = "yellow";
        strength.innerHTML = "Normal";
        bar.style.border = "solid 1px yellow";
    }
     if (input.value.length > 8) {
        msg.style.color = "green";
        strength.innerHTML = "Normal";
        bar.style.border = "solid 1px green";
    }
})