let mysound = document.getElementById("mysound");
let icon = document.getElementById("icon");

icon.onclick = function () {
    if (mysound.paused) {
        mysound.play();
        icon.src = "pause.png"
    } else {
        mysound.pause();
        icon.src = "play-button.png";
    }
};
