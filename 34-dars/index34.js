a = [10, 5, 0, 9, 8, 0, 5, 7, 0, 6, 3, 0, 1, 2];
bool = 0;
box = 0;
sum = 0;

for (i = 0; i < a.length; i ++) {
	if (a[i] == 0) {
		bool = 1;
		box += sum;
		console.log(sum);
	}

	if (bool) {
		sum += a[i];
	}
}

box -= sum;