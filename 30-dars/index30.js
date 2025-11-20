a = document.getElementById('a');
b = document.getElementById('b');
c = document.getElementById('c');
aval = 0;
bval = 0;

function aDraw(el) {
	calc = 0;
	a.style.height = el.value * 50 + 'px';
	b.style.top = el.value * 50 + 'px';
	calc += el.value * el.value;
	aval = el.value;
}

function bDraw(el) {
	b.style.width = el.value * 50 + 'px';
	calc += el.value * el.value;
	bval = el.value;
}

function cDraw() {
	c.style.height = Math.sqrt(calc) * 50 + 'px';
	c.style.transform = 'rotateZ(-' + Math.atan(bval / aval) + 'rad';
}

alert(Math.pow(8, 1 / 3));
alert(Math.sqrt(256));
alert(Math.PI);
alert(Math.sin(Math.PI / 2));
alert(Math.cos(0));
alert(Math.tan(0));
alert(Math.tan(1 / 0));
alert(Math.atan(0));
alert(Math.random());
alert(Math.trunc(10.9999999));
alert(Math.ceil(10.9999999));
alert(Math.floor(-10.9999999));
alert(Math.round(10.444445));
alert(Math.trunc(Math.random() * 100))
