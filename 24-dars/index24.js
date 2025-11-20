function me() {
	pEl = document.getElementById('one');
	pEl.innerHTML = 'Vaaleykum assalom!';
	pEl.style.color = 'red';
}

colorArray = ['red', 'blue', 'green', 'black'];

i = 0;
o = 0;

function col() {
	box = document.getElementById('box');
	box.style.width = '200px';
	box.style.height = '200px';
	box.style.backgroundColor = colorArray[i];
	i = (i + 1) % 4;
	alert(o);
	o ++;
}