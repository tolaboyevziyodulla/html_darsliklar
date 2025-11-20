hour = document.getElementById('hour');
minute = document.getElementById('minute');
second = document.getElementById('second');

setInterval(function() {
	date = new Date();
	hourSet = date.getHours();
	minuteSet = date.getMinutes();
	secondSet = date.getSeconds();
	
	hour.style.transform = 'rotateZ(' + hourSet * 30 + 'deg)';
	minute.style.transform = 'rotateZ(' + minuteSet * 6 + 'deg)';
	second.style.transform = 'rotateZ(' + secondSet * 6 + 'deg)';
}, 1000)