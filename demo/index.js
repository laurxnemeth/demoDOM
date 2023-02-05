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

// Event Listeners Here
