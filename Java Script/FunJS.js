//The boot up area, makes some montey python references
// alert ("Hello there traveller");
var name = prompt ("What is your name?"); //Declares the variable name, which stores the users name
// prompt ("What is your quest?");
// var swallow = prompt ("What is the airspeed of an unladen swallow?"); //Declares the variable swallow, swallow best bird

// if (swallow == "African or European?"){
// 	alert ("Ah a true intellectual. Welcome to the land of buttons " + name + ", pleasure having you");
// } else if (swallow == "african or european?") {
// 	alert ("Both 'african' and 'european' should have been capitalized, but a solid effort none the less. Welcome aboard " + name);
// } else {
// 	alert ("smh " + name);
// }

//This little bit changes the HTML text at the introduction to something personalized for the user
// document.addEventListener("DOMContentLoaded", function(){
//     changeText();
// });

function changeText(){
	var phrase = Math.floor((Math.random() * 5) + 1);
	var sayHello = document.getElementById("greet"); //Declares the variable sayHello, which is for the greeting on the home page
	if (phrase == 1){
		sayHello.innerHTML = "Dearest friend " + name + " please enjoy your stay";
	} else if (phrase == 2) {
		sayHello.innerHTML = "Don't blow the place up " + name;
	} else if (phrase == 3) {
		sayHello.innerHTML = "Why are you here " + name + "?";
	} else if (phrase == 4) {
		sayHello.innerHTML = "I see you have found me " + name ;
	}else{
		sayHello.innerHTML = "Hey there " + name + ", how do I get out of here?";
	}
}

//These are the colour changing background buttons
function red(){
	document.body.style.backgroundColor = "#FF0000";}

function orange(){
	document.body.style.backgroundColor = "#ff7400";}

function yellow(){
	document.body.style.backgroundColor = "#ffff00";}

function green(){
	document.body.style.backgroundColor = "#1bff00";}

function blue(){
	document.body.style.backgroundColor = "#009bff";}

function violet(){
	document.body.style.backgroundColor = "#ff00ec";}


//The stories of the world
function storyTime(){
	var livingThing = prompt("Enter the name of a living thing (duck, cat, ect..)");
	var adjective = prompt("Enter an adjective (descriptive word)");
	var storyName = prompt("Enter a name");
	var gender = prompt("Is the name you entered for a he or she?");
	var verb = prompt("Enter a verb");
	var place = prompt("Enter a place");
	var verbSecond = prompt("Enter another verb");

	var storyChooser = Math.floor((Math.random() * 5) + 1);

	var stories = document.getElementById("storiesText");

//The section for the actual stories	
	if (storyChooser == 1) {
		storiesText.innerHTML = "The story of the dragon. Once apon a time there was a " + adjective + " dragon named " + storyName + ". " + gender + " lived in a land called " + place + ". One day as " + gender + " was " + verb + " " + gender + " saw a " + livingThing + ". It was the most amazing " + livingThing + " that " + storyName + " had ever seen and " + gender +" began to " + verbSecond + "ing towards it. Then " + storyName + " ate the " + livingThing + ". The end.";
	
	} else if (storyChooser == 2) {
		storiesText.innerHTML = "The story of the duck. There once was a duck named " + storyName + " the great." + gender + " lived in " + place + " and ever day " + gender + " ate." + gender + " liked to " + verb + " and " + gender + " liked to " + verbSecond + ". One day the " + livingThing + " said to " + storyName + ": I think you are the " + adjective + "est duck of them all. And " + storyName + " was happy, " + gender + " went and had a ball. The end.";

	} else if (storyChooser == 3) {
		storiesText.innerHTML = "The short story. " + storyName + " was the most " + adjective + " " + livingThing + " in all of " + place + ". Because of this he " + verb + "s and " + verbSecond + "s all day long. Pretty weird eh? The end.";

	} else if (storyChooser == 4) {
		storiesText.innerHTML = "The story of school. When people were talking after a test about the answers it was quite worrysome. Because they wondered if it was " + verb + " or " + verbSecond + "." + storyName + " the " + adjective + " person in the " + place + " convinced them it was " + verb + ". I got " + livingThing + ". The end.";

	 } else if (storyChooser == 5) {
	 	storiesText.innerHTML = "What are you doing " + name + ". Seriously, like who even plays this game anymore. Even if they do who the heck chooses words like: " + adjective + ", " + livingThing + ", " + storyName + ", " + verb + ", " + place + ", and " + verbSecond + ". Man what a strange person you are.";
	} 

}

function shift(){
	var planeText = document.getElementById("encryptorText").value;
	planeText = planeText.toLowerCase();

	var broken = planeText.split("");
	
	var EncrText = "";
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var numbers = ["0","1","2","3","4","5","6","7","8","9"];

	var place = "";

	for(var i = 0; i < broken.length; i+= 1){
		if(broken[i] == " "){
			EncrText += " "

		}else if(numbers.includes(broken[i])){
			place = numbers.indexOf(broken[i])

			if (place + 5 > 9){
				EncrText += numbers[4 - (9-place)]
			} else{
				EncrText += numbers[place + 5]
			}

		}else if(alphabet.includes(broken[i])){
			place = alphabet.indexOf(broken[i])

			if (place + 7 > 25){
				EncrText += alphabet[6 - (25-place)]
			} else{
				EncrText += alphabet[place + 7]
			}
		}else{
			EncrText += broken[i]
		}
	}

	document.getElementById("responseE").innerHTML = EncrText;
}

function flip(){
	var planeText = document.getElementById("encryptorText").value;
	var broken = planeText.split("");
	var EncrText = ""

	for(var i = 0; i < broken.length; i+= 1){
		EncrText += broken[broken.length-1-i]
	}

	document.getElementById("responseE").innerHTML = EncrText;
}

function dank(){
	var planeText = document.getElementById("encryptorText").value;
	var broken = planeText.split("");
	var EncrText = ""

	for(var i = 0; i < broken.length; i+= 1){
		if (broken[i] == "d"){
			EncrText += broken[i].replace("d", "dank");
		} else if(broken[i] == "m") 
			EncrText += broken[i].replace("m", "meme");
		else {
			EncrText += broken[i];
		}
	}

	document.getElementById("responseE").innerHTML = EncrText;
}

function theSpeaks(){
	var words = document.getElementById("enterWords").value;
	// var words = prompt("Enter your words").toLowerCase();
	var broken = words.split("");
	var caplitalized = "";

	for(var i = 0; i < broken.length; i+= 1){
		if(i % 2 == 0){
			caplitalized = caplitalized + broken[i].toUpperCase();
		}
		else{
			caplitalized = caplitalized + broken[i];
		}
	}
	document.getElementById("response").innerHTML = caplitalized;
}