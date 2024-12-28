// Changes the url based on level selected
function handleGmode() {
	let level = this.textContent.substring(6,7);
	window.location.href = "play.html?" + level;
}

