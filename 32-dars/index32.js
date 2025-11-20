app = document.getElementById('app');
sum = 0;

function coolD() {
	for(i = 0; i < buttons.length; i ++) {
			buttons[i].setAttribute('disabled', 'true')
	}
}

for (i = 0; i < 5; i ++) {
	for(j = 0; j < 5; j ++) {
		button = document.createElement('button');
		button.setAttribute('onclick', 'me(this)')
		number = Math.trunc(Math.random() * 10) % 2;
		text = document.createTextNode(number);
		button.appendChild(text);
		app.appendChild(button);
		sum += number;
	}
	br = document.createElement('br');
	app.appendChild(br);
}
count = 0;

function me(el) {
	buttons = document.getElementsByTagName('button');

	if (el.innerHTML != 0) {
		el.style.backgroundColor = 'green';
		el.style.color = 'white';
		count += 1;
		if (count == sum) {
			coolD();
			alert('🎉🎉You are Winner!🎉🎉')
		}
	} else {
		coolD();
		alert(count);
		el.style.backgroundColor = 'red';
		el.style.color = 'white';
	}
}