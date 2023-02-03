const products = document.getElementById("supermarket");
const button = document.getElementsByTagName("button")[0];
const counter = document.getElementById("timer");
console.log(button);

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
	let seconds = 30;

	console.log(counter);
	counter.innerText = seconds;

	// while (seconds >= 0) {
	// 	setInterval(function () {
	// 		seconds--;
	// 		counter.innerText = seconds;
	// 	}, 1000);
	// }
});
