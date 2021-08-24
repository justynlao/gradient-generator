// Get key elements from the HTML document
const body = document.getElementById("gradient")
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const button = document.querySelector("button");
const cssSyntax = document.querySelector("h3");

// Set default background colors and text
setGradient();

// Set the background color and text based on provided input
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssSyntax.textContent = body.style.background + ";";
}

// Randomize background color and text
function randomizeGradient() {
	const getRandomColor = () => {
		return "#" + (Math.random()*0xfffff*1000000).toString(16).slice(0, 6);
	}
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

// Add event listeners for color inputs and button
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomizeGradient);