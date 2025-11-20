one = document.getElementById('one');
leftX = one.offsetLeft;
topX = one.offsetTop;

function act(e) {
	if (e.keyCode == 37 && leftX > 100) {
		leftX -= 100;
	}

	if (e.keyCode == 38 && topX > 100) {
		topX -= 100;
	}

	if (e.keyCode == 39) {
		leftX += 100;
	}

	if (e.keyCode == 40) {
		topX += 100;
	}
	one.style.left = leftX + 'px';
	one.style.top = topX + 'px';
}