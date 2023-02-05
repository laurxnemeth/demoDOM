const products = document.getElementById("supermarket");
const button = document.getElementsByTagName("button")[0];
const counter = document.getElementById("timer");
const players = document.getElementsByClassName("players");
let whoseTurn = players[0];

// 10 Second Timer Functions

function timer() {
	let timeleft = 5;
	let counterTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(counterTimer);
			whoseTurn = players[1];
		}
		counter.innerText = timeleft;
		timeleft -= 1;
	}, 1000);
}

// Event Listeners
button.addEventListener("click", () => {
	counter.innerHTML = "";
	timer();
});

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

products.addEventListener("click", (event) => {
	console.log(whoseTurn);
	let listItem = document.createElement("LI");
	listItem.innerText = event.target.innerText;
	whoseTurn.lastElementChild.appendChild(listItem);
	event.target.remove();
});
