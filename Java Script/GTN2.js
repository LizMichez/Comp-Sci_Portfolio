window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='number'){e.preventDefault();return false;}}},true);
//Line above disables enter in the input box

var num = 0; //Gets a random number
var tries = 0; //Declares the variable tries
var response = document.getElementById("response");
var guess = 0;
var gamePlaying = false;


function startGame(){
	document.body.style.background = "#0B0C10";

	num = Math.floor((Math.random() * 1000) + 1); //Gets a random number
	response = document.getElementById("response");
	response.innerHTML = "Enter a number between 1 and 1000";
	gamePlaying = true;

	document.getElementById("GTN").innerHTML = "Have Fun!";

}

function guessNum(){
	if(gamePlaying == true){
		console.log(num);
		guess = parseInt(document.getElementById("enterGuess").value); //Declares the variable guess

		if(guess < num){ //If the guess is lower than the number
				var lowHigh = "Too low!"; //defines variable lowHigh
				response.innerHTML = "Too low! Try again."; //gives an alert
				tries++; //Increace the variable tries by one

			} else if(guess > num){//If the guess is higher than the number
				var lowHigh = "Too high!"; //defines variable lowHigh
				response.innerHTML = "Too high! Try again.";//gives an alert
				tries++; //Increace the variable tries by one

			} else if(guess == num){ //If a person guesses the number
				writeText("WINNER!!!"); //Writes text on the canvas
				response.innerHTML = "Yay! You got it in " + tries + " tries!"; //gives an alert	

				if(tries == 1){ //If a person got it with one try
					response.innerHTML += " Woah you're lucky!"//gives an alert
				}else if(tries < 5){ //If a person got it with less than five tries
					response.innerHTML += " Man that's amazing!"//gives an alert
				}else if(tries < 10){ //If a person got it with less than ten tries
					response.innerHTML += " Ayy that's pretty good."//gives an alert
				}else if(tries < 15){ //If a person got it with less than fifteen tries
					response.innerHTML += " Yep, you're around average."//gives an alert
				}else if(tries < 20){ //If a person got it with less than twenty tries
					response.innerHTML += " You might want to work on your guessing skills."//gives an alert
				}else{ //If a person got it with more than 20 tries
					response.innerHTML += " Yikes........"//gives an alert
				}

			} else if(guess === "q"){ //If a person enters the letter q
				// break; //Break the loop

			}else if(isNaN(guess) || int(guess) > 1000){ //If someone enters an invalid guess
				response.innerHTML = "Invalid input. Try again";//gives an alert
				tries++; //increaces the value of tries by one
			}
	}
}


function writeText(text){ //Begins the function to play when somone wins
	var audio = document.getElementById("audio"); //Defines audio
	var c = document.getElementById("myCanvas"); //Defines c
	var ctx = c.getContext("2d"); //Defines ctx

	ctx.font = "25px Arial Narrow"; //Sets the font
	ctx.fillText(text,40,85); //Writes the text in variable text 40px over and 85px down from the origin

	audio.play(); //plays variable audio
	document.body.style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(0%,#ff3232), color-stop(16%,#fcf528), color-stop(32%,#28fc28), color-stop(50%,#28fcf8), color-stop(66%,#272ef9), color-stop(82%,#ff28fb), color-stop(100%,#ff3232))";
	//The line above sets the background to a rainbow gradient

}//This bracket closes the function writeText
