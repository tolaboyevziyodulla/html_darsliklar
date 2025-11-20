function getRect(el) {
	return el.getBoundingClientRect().height;
}

function open(el) {
	heightChild = getRect(el.children[1].children[0]);
	heightParent = getRect(el.children[1]);

	nodes = document.getElementsByClassName('box-div');
	for (i = 0; i < nodes.length; i ++) {
		nodes[i].children[1].style.height = '0';
	}

	if (!heightParent) {
		el.children[1].style.height = heightChild + 'px';
	}
}