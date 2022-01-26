(window.onload = function rollDice() {
	var random1 = Math.floor(Math.random() * (7 - 1) + 1);
	var random2 = Math.floor(Math.random() * (7 - 1) + 1);
	document.getElementsByClassName('img1')[0].src = 'images/dice' + random1 + '.png';
	document.getElementsByClassName('img2')[0].src = 'images/dice' + random2 + '.png';
}),
	true;
