function GTN(){ //Begins the functionGTN (Get The Number)
	document.body.style.background = "#0B0C10";

	var num = Math.floor((Math.random() * 1000) + 1); //Gets a random number
	var guess = 0; //Declares the variable guess
	var tries = 0; //Declares the variable tries

	while(guess != num || guess != "q"){ //Opends the loop that plays the game
		if(tries < 1){ //If a person has not guessed before
			guess = prompt("Guess a number from 1 - 1000"); //Gets user input for the guess
		}else { //else 
			guess = prompt("Guess a number from 1 - 1000. Last time you guessed " + lastTry + " and it was " + lowHigh); //gets uer imput with a reminder added
		}
		

		if(guess < num){ //If the guess is lower than the number
			var lowHigh = "Too low!"; //defines variable lowHigh
			alert("Too low! Try again."); //gives an alert
			tries++; //Increace the variable tries by one

		} else if(guess > num){//If the guess is higher than the number
			var lowHigh = "Too high!"; //defines variable lowHigh
			alert("Too high! Try again.");//gives an alert
			tries++; //Increace the variable tries by one

		} else if(guess == num){ //If a person guesses the number
			writeText("Yay! You got it in " + tries + " tries!"); //Writes text on the canvas
			alert("You got it!"); //gives an alert
			alert("It took you " + tries + " tries to guess it");//gives an alert
			

			if(tries == 1){ //If a person got it with one try
				alert("Woah you're lucky!")//gives an alert
			}else if(tries < 5){ //If a person got it with less than five tries
				alert("Man that's amazing!")//gives an alert
			}else if(tries < 10){ //If a person got it with less than ten tries
				alert("Ayy that's pretty good.")//gives an alert
			}else if(tries < 15){ //If a person got it with less than fifteen tries
				alert("Yep, you're around average.")//gives an alert
			}else if(tries < 20){ //If a person got it with less than twenty tries
				alert("You might want to work on your guessing skills.")//gives an alert
			}else{ //If a person got it with more than 20 tries
				alert("Yikes........")//gives an alert
			}

			break; //breaks the loop

		} else if(guess === "q"){ //If a person enters the letter q
			break; //Break the loop

		}else if(isNaN(guess) || int(guess) > 1000){ //If someone enters an invalid guess
			alert("Invalid input. Try again");//gives an alert
			tries++; //increaces the value of tries by one
		}

	var lastTry = guess; //Defines the variable lastTry
	} //This bracket closes the main while loop

} //This bracket closes the function GTN

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