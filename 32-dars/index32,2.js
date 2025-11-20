app = document.getElementById('app');
images = document.getElementsByTagName('img');

count = images.length - 2;
index = 0;

function go(number) {
	index += count;

	images[count].style.zIndex = ++ index;

	count += number;

	count %= images.length;
	
	console.log(count);
	if (count == -1) count = images.length - 1;
}