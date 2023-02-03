const products = document.getElementById("supermarket");
const button = document.getElementsByTagName("button")[0];
const counter = document.getElementById("timer");

function interval(deadline) {
	setInterval(function () {
		const now = new Date().getTime() / 1000;
		let time = deadline - now;
		counter.innerHTML = Math.floor(time);
		if (time < 0) {
			counter.innerHTML = "DONE";
			clearInterval(interval);
		}
	}, 1000);
}

function timer() {
	counter.innerHTML = "";
	const deadline = new Date().getTime() / 1000 + 12;
	interval(deadline);
}

// Event Listeners
products.addEventListener("mouseover", (event) => {
	if (event.target.tagName === "LI") {
		event.target.style.backgroundColor = "steelblue";
		event.target.style.color = "white";
	}
});

products.addEventListener("mouseout", (event) => {
	if (event.target.tagName === "LI") {
		event.target.style.backgroundColor = "";
		event.target.style.color = "black";
	}
});

button.addEventListener("click", () => {
	timer();
});

products.addEventListener("click", () => {});
