function headerScroll() {
    var topAbout = document.getElementById("header-about"),
        topWork = document.getElementById("header-work"),
        yPos = window.pageYOffset;
    if (yPos < 550) {
        topAbout.style.transform ="translateY(200px)";
    } else {
        topAbout.style.transform ="translateY(0)";
    }
    if (yPos < 2350) {
        topWork.style.transform ="translateY(200px)";
    } else {
        topWork.style.transform ="translateY(0)";
    }
}
    window.addEventListener("scroll",headerScroll);

function skillScroll() {
    var topAbout = document.getElementById("professional-Skills"),
        topWork = document.getElementById("video-work"),
        yPos = window.pageYOffset;
    if (yPos < 700) {
        topAbout.style.opacity ="0";
    } else {
        topAbout.style.opacity ="1";
    }
    if (yPos < 2550) {
        topWork.style.opacity ="0";
    } else {
        topWork.style.opacity ="1";
    }
}
    window.addEventListener("scroll",skillScroll);
