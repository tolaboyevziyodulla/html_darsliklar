one = document.getElementById('one');
scr = document.getElementById('scr');
result = '';

function writed() {
	result = scr.value;
	one.innerHTML = result;
}