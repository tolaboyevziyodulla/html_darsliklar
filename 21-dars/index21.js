for (i = 0; i < 5; i ++) {
	for(j = 0; j < 5; j ++) {
		for(k = 0; k < 5; k++) {
			console.log('i:', i, 'j:', j, 'k:', k)
		}
	}
}
console.log('Tamom')
a = 0;
for (i = 0; i < 5; i ++) {
	for(j = 0; j < 5; j ++) {
		a ++;
	}
}
console.log(a);
console.log('Tamom')
for(i = 0; i < 5; i ++) {
	console.log('------')
	for(j = 0; j < i; j ++) {
		console.log(j)
	}
}
console.log('Tamom')
for(i = 0; i < 5; i ++) {
	console.log('------')
	for(j = i; j < 5; j += 2) {
		console.log(j)
	}
}
console.log('Tamom')
for(i = 0; i < 5; i ++) {
	console.log('------')
	for(j = i; j < i * i; j += 2) {
		console.log(j)
	}
}
console.log('Tamom')
for(i = 0; i < 5; i ++) {
	console.log('------')
	for(j = i; j < i; j += 2) {
		console.log(j * i)
	}
}
console.log('Tamom')
for(i = 0; i < 5; i += 2) {
	console.log('------')
	for(j = i; j < i + 1; j += 2) {
		console.log(j * i)
	}
}
console.log('Tamom')
for(i = 0; i < 5; i ++) {
	if (i == 3) break;
	console.log(i)
}
console.log('Salom')
console.log('Tamom')
for(i = 0; i < 5; i ++) {
	if (i == 3) continue;
	console.log(i)
	console.log('Salom')
}
console.log('Tamom')
for(i = 0; i < 5; i ++) {
	for(j =i; j < i * i; j ++){
		if(j == 0) continue;
		console.log(i)
	}
}
console.log('Tamom')
g = 8;
count = 0

for(i = 2; i < a; i ++) {
	if(a % i == 0) {
		count ++;
	}
} 

if (count == 0) {
	console.log('TUB')
} else {
	console.log('TUB EMAS')
}