// 10 Second Timer Function
function timer() {
	let timeleft = 5;
	let counterTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(counterTimer);
		}
		counter.innerText = timeleft;
		timeleft -= 1;
	}, 1000);
}

// Event Listeners Here
