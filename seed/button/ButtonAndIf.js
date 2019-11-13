var RandomNumberBackup = 10;

var ButtonCounter = 0;


function ButtonClicked() {

	var colors = ['blue', 'yellow', 'DarkSeaGreen', 'CadetBlue', 'AliceBlue', 'AntiqueWhite', 'DeepPink', 'HoneyDew', 'Lavender'];

	var borderColor = 'border-color';

	var RandomNumber = Math.floor(Math.random() * 9);;

	console.log(RandomNumber)

	if (RandomNumber == RandomNumberBackup) {

		RandomNumber += 1;

	}

	if (RandomNumber == 9) {

		RandomNumber = 0

	}
	

	document.getElementById('background').style.borderColor = colors[RandomNumber];

	console.log(RandomNumber)

	RandomNumberBackup = RandomNumber;

	console.log(RandomNumberBackup)

	ButtonCounter += 1;

	if (ButtonCounter >5) {

		alert('Wie oft willst du hier eigentlich noch drauf drücken?');
		ButtonCounter = 0;

	}

}