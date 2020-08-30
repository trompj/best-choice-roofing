window.addEventListener('resize', menuCloseResize);
// document.getElementById('move-top').addEventListener('click', moveTop);

function moveTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function menuCloseResize() {
    let size = window.screen.width;

    if (window.screen.width > 625) {
        document.getElementById("hamburger-menu").style.display = "none";
    }
}

function hamburgerMenuFunction() {
    if (document.getElementById("hamburger-menu").style.display === "inline-block") {
        document.getElementById("hamburger-menu").style.display = "none";
    }
    else {
        document.getElementById("hamburger-menu").style.display = "inline-block";
    }
}

