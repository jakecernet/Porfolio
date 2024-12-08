window.addEventListener("scroll", function () {
	var o =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop,
		t = document.querySelector(".top");
	o > 400 ? (t.style.display = "flex") : (t.style.display = "none");
});

function expand(id) {
	closeAll(id);
	var e = document.getElementById(id);
	var arrow = document.getElementById(id + "arrow");
	if (e.style.height === "0px" || e.style.height === "") {
		e.style.height = "8rem";
		arrow.style.transform = "rotate(-90deg)";
	} else {
		e.style.height = "0px";
		arrow.style.transform = "rotate(0deg)";
	}
}

function closeAll(exceptId) {
	var elements = document.getElementsByClassName("liContents");
	var arrows = document.getElementsByClassName("arrow");
	for (var i = 0; i < elements.length; i++) {
		var currentId = elements[i].id;
		if (currentId !== exceptId) {
			elements[i].style.height = "0px";
			var currentArrow = document.getElementById(currentId + "arrow");
			if (currentArrow) {
				currentArrow.style.transform = "rotate(0deg)";
			}
		}
	}
}

document.addEventListener("DOMContentLoaded", function () {
	var elements = document.getElementsByClassName("liContents");
	var arrows = document.getElementsByClassName("arrow");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.height = "0px";
		if (arrows[i]) {
			arrows[i].style.transform = "rotate(0deg)";
		}
	}
});

function measureHeight() {
	var element = document.getElementById("leftText");
	var img = document.querySelector(".img");
	var height = element.clientHeight;
	img.style.height = height - 30 + "px";
}

if (window.innerWidth > 1360) {
	window.addEventListener("resize", measureHeight);
	document.addEventListener("DOMContentLoaded", measureHeight);
}
