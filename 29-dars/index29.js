one = document.getElementById('one');
screen = document.getElementById('screen');
aud = document.getElementById('aud');

scr = '';
result = '';

function check(num) {
	return (num < 10) ? '0' + num : num;
}

function show() {
	result = one.value;
	minute = parseInt(result.substr(0, 2));
	second = parseInt(result.substr(3, 2));

	timer = setInterval( function() {
		scr = check(minute) + ':' + check(second);
		screen.innerHTML = scr;
		if (second == 0 && minute == 0) {
			clearInterval(timer);
			aud.play();
		}

		if (second == 0 && minute != 0) {
			second = 60;
			minute --;
		}
		second --;
	}, 1000)
}
