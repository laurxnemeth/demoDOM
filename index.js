const products = document.getElementById("supermarket");
console.log(products);

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
