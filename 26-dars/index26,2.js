box = document.getElementById('box');
left = document.getElementById('left');
center = document.getElementById('center');
right = document.getElementById('right');
bool = 0;

function carstart() {
	if (!bool) {
		box.style.marginLeft = '70%';
		left.style.animationName = 'wheel';
		center.style.animationName = 'wheel';
		right.style.animationName = 'wheel';

		setTimeout(function() {
			left.style.animationName = ''
			center.style.animationName = '';
			right.style.animationName = '';
		}, 2000)
	}

	bool = 1;
}