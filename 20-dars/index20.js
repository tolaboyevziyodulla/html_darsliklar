for(i = 2;i % 2 || i <= 10;i += 2) {
	console.log(i ** i)
}
console.log('Tamom')
for (i = 12, j = 6; j >= 4; i--, j--) {
	console.log(i + j)
}
console.log('Tamom')
for (i = 12, j = 6; j >= 4 && i <= 16; i += 2, j -= 2) {
	console.log(i + j)
}
console.log('Tamom')
for (i = 12, j = 6; j >= 4 || i <= 16; i += 2, j -= 2) {
	console.log(i + j)
}
console.log('Tamom')
for(i = 16, j = 6; j % i; i /= 2) {
	console.log(i + j)
}
console.log('Tamom')
for(i = 16, j = 6; j % i &&i <= 100	; i *= 2, j ++) {
	console.log(i + j)
}
console.log('Tamom')
for(i = 0; i <= 10; i ++) {
	if (i % 2) {
		console.log(i + 2)
	}
}
console.log('Tamom')
for(i = 5, j = 6; (i % 2) && j; i --, j --) {
	console.log(i * j)
}
console.log('Tamom')
a = 10
if (a <= 10) {
	console.log(a)
}
console.log('Tamom')
while(a) {
	console.log(a)
	a --;
}
console.log('Tamom')
// do {
// 	a ++;
// 	console.log(a)
// }while(a)