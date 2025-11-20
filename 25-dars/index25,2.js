hour = document.getElementById('hour');
minute = document.getElementById('minute');
second = document.getElementById('second');

function check(number) {
	if (number < 10) {
		return  '0' + number;
	} else {
		return number;
	}
}

setInterval(function() {
	date = new Date();
	hour.innerHTML = check(date.getHours());
	minute.innerHTML = check(date.getMinutes());
	second.innerHTML = check(date.getSeconds());
}, 1000);

