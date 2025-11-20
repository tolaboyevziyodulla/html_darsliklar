n = 1000;
for(i = 1; i <= 1000; i ++) {
	s = 0;
	for(j = 1; j < i; j ++) {
		if (i % j == 0) {
			s += j
		}
	}
	if (s == i) {
		console.log(i)
	}
}
console.log('Tamom')
for(i = 2; i <= 10; i += 2) {
	console.log(2 ** i * (2 ** (i + 1) - 1))
}
console.log('Tamom')
x = 0;
for(i = 2; x <= n; i += 2) {
	x = 2 ** i * (2 ** (i + 1) - 1)
	console.log(x)
}
console.log('Tamom')
a = [39, 'Ziyodulla', 56, 78, 90, 'Tulabayev', 454, 111, 'eghggh']
console.log(a)
console.log('Tamom')
for(i = 0; i < a.length; i ++) {
	console.log(' * ', a[i])
}
console.log('Tamom')
s = [897, 983389, -383833, 6567, 9]
max = s[0]
for(i = 0; i < s.length; i ++) {
	if (max < s[i]) {
		max =s[i]
	}
}
console.log(max)