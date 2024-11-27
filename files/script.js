window.addEventListener("scroll", function () {
	var o =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop,
		t = document.querySelector(".top");
	o > 400 ? (t.style.display = "flex") : (t.style.display = "none");
});

function expand(id) {
	var e = document.getElementById(id);
	var arrow = document.getElementById(id + "arrow");
	if (e.style.height == "0px" || e.style.height == "") {
		e.style.height = "auto";
		arrow.style.transform = "rotate(180deg)";
	} else {
		e.style.height = "0px";
		arrow.style.transform = "rotate(0deg)";
	}
}