header = document.getElementById('header');

count = 0;

setInterval(function() {
	array = ['Fitnes Building!', 'Consultation!', 'Personal Training!'];
	header.style.width = '400px';
	setTimeout(function() {
		header.style.width = '0px';
	}, 1500)
	count ++;
	header.innerHTML = array[count % 3];
}, 3000)