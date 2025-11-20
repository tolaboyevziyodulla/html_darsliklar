ball = document.getElementById('ball');
chap = document.getElementById('chap');
ong = document.getElementById('ong');

function foot1() {
	chap.style.animationName = 'oyoq1';
	setTimeout(function() {
		ball.style.left = '850px';
		chap.style.animationName = '';
	}, 740);
	if (ball.style.left == '850px') {
		chap.style.animationName = ''
	}
}

function foot2() {
	ong.style.animationName = 'oyoq2';
	setTimeout(function() {
		ball.style.left = '160px';
		chap.style.animationName = '';
	}, 740);
}