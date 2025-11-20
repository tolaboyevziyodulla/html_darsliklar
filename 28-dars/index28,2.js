inn = document.getElementById('inn');


function toza(){
	newVal = ''
	for (i = inn.value.length - 1; i >= 0; i--) {
		if (inn.value[i] == '0' || inn.value[i] == '1' || inn.value[i] == '2' || inn.value[i] == '3' || inn.value[i] == '4' || inn.value[i] == '5' || inn.value[i] == '6' || inn.value[i] == '7' || inn.value[i] == '8' || inn.value[i] == '9' || inn.value[i] == '-' || inn.value[i] == '+' || inn.value[i] == '/' || inn.value[i] == '*' || inn.value[i] == '.') {
			newVal += inn.value[i]
		}
	}
	inn.value = newVal
}



function harf(el) {
	if (inn.value == '0') {
	inn.value = el.innerHTML;
} else {
	inn.value += el.innerHTML;
}
}

function C(){
	inn.value = 0;
}

function d2() {
	inn.value = inn.value * inn.value;
}

function d3() {
	inn.value = inn.value * inn.value * inn.value;
}

function teng() {
	try {
		inn.value = eval(inn.value);	
	} catch {
	inn.value = 'xato';	
	}
	
}

function ochir() {
	inn.value = inn.value.slice(0,-1);
	if (inn.value == '') {
		inn.value = 0
	}
}
