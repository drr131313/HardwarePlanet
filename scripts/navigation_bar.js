
const bar = document.getElementById("navigation_bar");
const nav_toggles = document.querySelectorAll(".navigation_toggle");

function toggleBar() {
    if(bar.style.display === "none") {
        bar.style.display = "flex";
        document.getElementById("header_toggle").style.display = "none";
    }
    else {
        bar.style.display = "none";
        document.getElementById("header_toggle").style.display = "inline";
    }
}

nav_toggles.forEach(function(toggle) {
    toggle.addEventListener("click", toggleBar);
})

