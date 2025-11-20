a = document.getElementById('a');

function hello(d) {
	if (d.keyCode == 13) {
		alert('Salom Tanbal!')
	}
}

function show(e, el) {
	aEl = el.value;
	a.style.width = (aEl * 10) + 'px';
	a.style.height = (aEl * 10) + 'px';
	if (el.value < 30) {
		a.style.width = '100px';
		a.style.height = '100px';
	}
}