(window.onload = function rollDice() {
	var random1 = Math.floor(Math.random() * (7 - 1) + 1);
	var random2 = Math.floor(Math.random() * (7 - 1) + 1);

	if (random1 == 1) {
		document.getElementsByClassName('img1')[0].src = '/images/dice1.png';
	} else if (random1 == 2) {
		document.getElementsByClassName('img1')[0].src = '/images/dice2.png';
	} else if (random1 == 3) {
		document.getElementsByClassName('img1')[0].src = '/images/dice3.png';
	} else if (random1 == 4) {
		document.getElementsByClassName('img1')[0].src = '/images/dice4.png';
	} else if (random1 == 5) {
		document.getElementsByClassName('img1')[0].src = '/images/dice5.png';
	} else {
		document.getElementsByClassName('img1')[0].src = '/images/dice6.png';
	}

	if (random2 == 1) {
		document.getElementsByClassName('img2')[0].src = '/images/dice1.png';
	} else if (random2 == 2) {
		document.getElementsByClassName('img2')[0].src = '/images/dice2.png';
	} else if (random2 == 3) {
		document.getElementsByClassName('img2')[0].src = '/images/dice3.png';
	} else if (random2 == 4) {
		document.getElementsByClassName('img2')[0].src = '/images/dice4.png';
	} else if (random2 == 5) {
		document.getElementsByClassName('img2')[0].src = '/images/dice5.png';
	} else {
		document.getElementsByClassName('img2')[0].src = '/images/dice6.png';
	}
}),
	true;
