const wraps = document.querySelectorAll("#blob-bg .blob-wrap");

// give each blob a different scroll speed/direction for a parallax feel
const speeds = [0.15, -0.1, -0.08, 0.12];

let ticking = false;

function updateBlobs() {
	const scrollY = window.scrollY || window.pageYOffset;

	wraps.forEach((wrap, i) => {
		const speed = speeds[i % speeds.length];
		const offset = scrollY * speed;
		// this element has no CSS animation on it, so the transform
		// set here is never fought over or overridden
		wrap.style.transform = `translateY(${offset}px)`;
	});

	ticking = false;
}

window.addEventListener(
	"scroll",
	function () {
		if (!ticking) {
			window.requestAnimationFrame(updateBlobs);
			ticking = true;
		}
	},
	{ passive: true },
);

// run once on load
updateBlobs();
