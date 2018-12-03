/*This set of code will encrypt and de-encrypt a message using a set of smaller functions that each perform steps 
or part of the encryption*/

function encryptor(){ //This function is the master function for encrypting the text (E)
	var planeText = document.getElementById("encryptorText").value; //Gets text from an input box on the website
	planeText = planeText.toLowerCase(); //Puts the text in lower case for ease of processing
	
	var phaseOne = shiftForward(planeText); //Shifts the text and numbers
	var phaseTwo = flipAround(phaseOne); //Flips the entire string
	var phaseThree = base64(phaseTwo); //Converts string to base 64
	var phaseFour = toUnicode(phaseThree); //Converts string characters to Unicode
	var phaseFive = flipInside(phaseFour); //Flips each individual character / number

	document.getElementById("responseE").innerHTML = phaseFive; //Writes a paragraph element that desplays the answer
}

function ANTIencryptor(){ //This function is the master function for de-encrypting the text (E)
	var Enctext = document.getElementById("antiEncryptorText").value; //Gets text from an input box on the website
	
	var backOne = flipInside(Enctext); //Flips each individual character / number
	var backTwo = fromUnicode(backOne); //Converts the text to characters from unicode
	alert(backTwo);
	var backThree = fromBase64(backTwo);
	// var backFour = flipAround(backThree);
	// var backFive = shiftBackwards(backFour);
	
	document.getElementById("responseD").innerHTML = backThree; //Writes a paragraph element that desplays the answer
}
function shiftForward(textZero){//This function shifts all letters by 7 down the alphabet and all digets by 5 - for encrypting (E1)
	let broken = textZero.split(""); //Splits the string into an array of its characters
	
	let EncrText = ""; //This is the variable which will be outputted
	let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let numbers = ["0","1","2","3","4","5","6","7","8","9"];

	let place = "";

	for(var i = 0; i < broken.length; i+= 1){ //For as long as the i is lower than the length of the array
		if(broken[i] == " "){ //If it is a space
			EncrText += " " //Add a space to the output variable

		}else if(numbers.includes(broken[i])){ //If the character is a number
			place = numbers.indexOf(broken[i]) //Defines place as the index value of wherever this character is in the number array

			if (place + 5 > 9){ //If shifting the number by 5 will make it larger than the max value
				EncrText += numbers[4 - (9-place)] //Adds the character at the specified position to the output variable
			} else{ //If shifting hte number keeps it within the string
				EncrText += numbers[place + 5] //Adds the character at the specified position to the output variable
			}

		}else if(alphabet.includes(broken[i])){ //If the character is a letter
			place = alphabet.indexOf(broken[i]) //Defines place as the index value of wherever this character is in the alphabet array

			if (place + 7 > 25){ //If shifting the number by 7 will make it at a position that does not exist in the array
				EncrText += alphabet[6 - (25-place)] //Adds the character at the specified position to the output variable
			} else{ //If shifting the number will still have it fit within the string
				EncrText += alphabet[place + 7] //Adds the character at the specified position to the output variable
			}
		}else{
			EncrText += broken[i] //If it's a special character add it to the output variable
		}
	}
	return EncrText; //Returns the specified variable as the output of the function	
}

function flipAround(textOne){ //This function flips the characters so they are in reverse - for encrypting and de-encrypting (E2)(D3) 
	let broken = textOne.split(""); //Splits the string into an array of its characters
	let EncrText = "" //This is the variable which will be outputted

	for(var i = 0; i < broken.length; i+= 1){ //For as long as the i is lower than the length of the array
		EncrText += broken[broken.length-1-i] //Adds the character at hte index value opposite to i to the variable
	}

	return EncrText; //Returns the specified variable as the output of the function
}

function base64(textTwo){ //This function puts the characters in base64, a common and built-in encryption method - for encrypting (E3)
	return window.btoa(textTwo); //Uses a premade function to convert the characters to base 64 and return them
}

function toUnicode(textThree){//This function converts the characters to Unicode and puts breaks between letters - for encrypting (E4)
	let EncrText = ""//This is the variable which will be outputted

	for(var i = 0; i < textThree.length; i+= 1){ //For as long as the i is lower than the length of the array
		EncrText += textThree.charCodeAt(i) //Converts character at index i of the string into Unicode and adds it to the output variable
		EncrText += " " //Adds a space to the output variable
	}
	
	return EncrText; //Returns the specified variable as the output of the function
}

function flipInside(textFour){ //This function flips each word - for encrypting and de-encrypting (E5)(D1) 
	let broken = textFour.split(" "); //Defines broken as paramiter of the function split by spaces
	let EncrText = "" //This is the variable which will be outputted

	for(var i = 0; i < broken.length; i+= 1){  //For as long as the i is lower than the length of the array
		for(var x = 0; x < broken[i].length; x+= 1){ //For as long as the x is lower than the length of the individual string in the array
			EncrText += broken[i][broken[i].length-1-x] //Adds character at index opposite to x and inside broken[i] to the EncrText
		}
		EncrText += " " //Adds a space between each index value of the array broken
	}

	return EncrText; //Returns the specified variable as the output of the function
}

function fromUnicode(textThree){//This function converts the characters from  Unicode and removes spaces - for de-encrypting (D2)
	let broken = textThree.split(" ")
	let EncrText = "";//This is the variable which will be outputted

	for(var i = 0; i < broken.length; i+= 1){ 
		EncrText += String.fromCharCode(broken[i]);
	}
	
	return EncrText; //Returns the specified variable as the output of the function
}

function fromBase64(textTwo){ //This function puts the characters in base64, a common and build in encryption method - for de-encrypting (D3)
	return window.atob(textTwo); //Uses a premade function to convert the characters to base 64 and return them
}

function shiftBackwards(textZero){
	let broken = textZero.split(""); //Splits the string into an array of its characters
	
	let EncrText = ""; //This is the variable which will be outputted
	let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let numbers = ["0","1","2","3","4","5","6","7","8","9"];

	let place = "";

	for(var i = 0; i < broken.length; i+= 1){ //For as long as the i is lower than the length of the array
		if(broken[i] == " "){ //If it is a space
			EncrText += " " //Add a space to the output variable

		}else if(numbers.includes(broken[i])){ //If the character is a number
			place = numbers.indexOf(broken[i]) //Defines place as the index value of wherever this character is in the number array

			if (place - 5 < 0){ //If shifting the number by 5 will make it larger than the max value
				EncrText += numbers[9 - (4-place)] //Adds the character at the specified position to the output variable
			} else{ //If shifting hte number keeps it within the string
				EncrText += numbers[place - 5] //Adds the character at the specified position to the output variable
			}

		}else if(alphabet.includes(broken[i])){ //If the character is a letter
			place = alphabet.indexOf(broken[i]) //Defines place as the index value of wherever this character is in the alphabet array

			if (place - 7 < 0){ //If shifting the number by 7 will make it at a position that does not exist in the array
				EncrText += alphabet[25 - (6-place)] //Adds the character at the specified position to the output variable
			} else{ //If shifting the number will still have it fit within the string
				EncrText += alphabet[place - 7] //Adds the character at the specified position to the output variable
			}
		}else{
			EncrText += broken[i] //If it's a special character add it to the output variable
		}
	}
	return EncrText; //Returns the specified variable as the output of the function	
}