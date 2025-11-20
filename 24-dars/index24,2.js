function my() {
	input = document.getElementById('input');
	p = document.getElementById('one');
	p.innerHTML = input.value;
}

i = 0

function mydiv() {
	div = document.getElementById('box');
	i ++;
	if (i % 2) {
		div.style.borderRadius = '50%';
	} else {
		div.style.borderRadius = '0';
	}
}