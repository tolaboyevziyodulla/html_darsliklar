one = document.getElementById('one');
pin = document.getElementById('pin');
result = '';

pin.style.fontSize = '3rem';

function drawpine() {
	number = parseInt(one.value);
	for(i = 0; i <= number; i ++) {
		for(k = 0; k < number - i; k ++){
			result += ' ';
		}

		for(k = number - i; k <= number + i; k ++){
			if (number % 2 == 0) {
				if (i % 2 == 0) {
					if (k % 2) {
						result += '*';
					} else {
						result += ' ';
					}
				} else {
					if (k % 2) {
						result += ' ';
					} else {
						result += '*';
					}
				}
			} else {
				if (i % 2 == 0) {
					if (k % 2) {
						result += ' ';
					} else {
						result += '*';
					}
				} else {
					if (k % 2) {
						result += '*';
					} else {
						result += ' ';
					}
				}
			}
		}

		for(k = number + i + 1; k < 2 * number - 1; k ++){
			result += ' ';
		}
		result += '<br>';
	}
	pin.innerHTML = result;
}
