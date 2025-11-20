app = document.getElementById('app');

function create() {
	for(i = 0; i < 500; i ++) {
		wh = Math.random() * 20;


		r = Math.trunc(Math.random() * 255);
		g = Math.trunc(Math.random() * 255);
		b = Math.trunc(Math.random() * 255);

		left = Math.random() * 1000 + 150;
		top = Math.random() * 20 + 30;

		div = document.createElement('div');

		div.style.width = wh + 'px';
		div.style.height = wh + 'px';
		div.style.left = left + 'px';
		div.style.top = top + 'px';
		div.style.position = 'absolute';
		div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
		div.style.borderRadius = '50%';

		app.appendChild(div);
	}

}

function drop() {
	divs = document.getElementsByTagName('div');
	h = 0;
	rop = setInterval(function() {
		divs[h].style.top = '97%'
		h ++;
	}, 1)

	setTimeout(function() {
		rop = clearInterval;
	}, 500)
}