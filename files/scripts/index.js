function switchTheme() {
	document.body.classList.toggle("dark");
	document.body.classList.toggle("light");
}

function showNav() {
	nav = document.getElementsByClassName("nav")[0];
	nav.style.left = "0";
}

document.addEventListener("click", function (e) {
	if (e.target.classList.contains("nav") || e.target.classList.contains("nav-item")) {
        nav = document.getElementsByClassName("nav")[0];
        nav.style.left = "-100%";
    }
});
