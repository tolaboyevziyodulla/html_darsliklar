str = 'HeLlo*World!';
result1 = str.substr(-4, 3);
result2 = str.slice(3, 6);
result3 = str.indexOf('*Wo');
result4 = str.search(/woR/i);
result5 = str.replace(/l/ig, 'r');
result6 = str.charAt(5);
result7 = str.charCodeAt(3);
result8 = str.split('')


console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);



str1 = 'Salom';
str2 = 'sAlom';

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

if (str1 == str2) {
	alert('hello')
}

p = document.getElementById('one');
a = [8, 6, 20, 78];
result = '';
mul = 1;


for(i = 0; i < a.length; i ++) {
	mul *= a[i];
}

result += a.join(' * ') + '=' + mul;
p.innerHTML = result;

console.log(a.reverse())