a = [4, 3456, 435, 345, 0, 2];
l = a.length;

for (i = 0; i < l / 2; i ++) {
	x = a[i] + a[l - 1 -i];
	if (i == l - 1 - i) {
		x = a[i];
	}
	console.log(x); 
}
console.log('Tamom');
f = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
p = 4;
k = 7;
s = 0;

for(i = p; i <= k; i ++) {
	s += f[i];
}
console.log(s / (k - l + 1) / 2);
console.log('Tamom');
c = 56;
g = 78;
function sum(x, y) {
	console.log(x + y);
}

sum(c, g);
console.log('Tamom');
function hello() {
	console.log('Hello');
}

hello();
console.log('Tamom');
function ret(u) {
	return u + 23;
}

d = ret(47);
console.log(d);
console.log('Tamom');
function calculate(t) {
	t += 59;
	t -= 30;
	t /= 7;
	t *= 5;
	console.log(t)
}

calculate(10);
calculate(20);
calculate(30);
calculate(40);
calculate(50);
calculate(60);
calculate(70);
calculate(80);
calculate(90);
console.log('Tamom');
function mars(w) {
	return w ** 2;
}
function fox(o) {
	o = mars(o);
	return mars(cal(o, 1)) * cal(2, 2);
}
function cal(m, r) {
	return m ** r;
}

h = 0;
console.log(fox(h) + cal(h, h + 1));