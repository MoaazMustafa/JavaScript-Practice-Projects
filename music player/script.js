let progress = document.querySelector("#input");
let song = document.querySelector("#song");
let cntrlIcon = document.querySelector("#cntrlIcon");
const img = document.querySelector("img");


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (cntrlIcon.classList.contains("fa-play")) {
        song.play();
        cntrlIcon.classList.add("fa-pause")
        cntrlIcon.classList.remove("fa-play")
        img.classList.add("play")
    }
    else {
        song.pause();
        cntrlIcon.classList.remove("fa-pause")
        cntrlIcon.classList.add("fa-play")
        img.classList.remove("play")
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    cntrlIcon.classList.add("fa-pause")
    cntrlIcon.classList.remove("fa-play")
    img.classList.add("play")
}
