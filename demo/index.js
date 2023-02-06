let button = document.getElementsByTagName("button")[0];
let counter = document.getElementById("timer");
let products = document.querySelector("#supermarket");
let players = document.getElementsByClassName("players");
let whoseTurn = players[0];

// 10 Second Timer Function
function timer() {
	let timeleft = 5;
	let counterTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(counterTimer);
			// whoseTurn = players[1];
			if (whoseTurn === players[0]) {
				whoseTurn = players[1];
				console.log(whoseTurn);
			} else {
				whoseTurn = players[0];
				console.log(whoseTurn);
			}
		}
		counter.innerText = timeleft;
		timeleft -= 1;
	}, 1000);
}

// Event Listeners Here
button.addEventListener("click", () => {
	timer();
});

products.addEventListener("click", (evt) => {
	let chosenProduct = evt.target.innerText;
	let listItem = document.createElement("LI", chosenProduct);
	listItem.innerText = chosenProduct;
	whoseTurn.lastElementChild.appendChild(listItem);

	evt.target.remove();
});

products.addEventListener("mouseover", (evt) => {
	evt.target.style.backgroundColor = "steelblue";
});

products.addEventListener("mouseout", (evt) => {
	evt.target.style.backgroundColor = "";
});
