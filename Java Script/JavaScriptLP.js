//This file includes litte programs that are not directly related to hte function of the website
function bigger(){
	document.getElementById("myList").innerHTML = ""; //Calls the my list element and wipes its contents

	let firstInt = prompt("What's the first number?"); //Declares firstInt
	let secondInt = prompt("What's the second number?"); //Declares secondInt

	if(parseInt(firstInt) >= parseInt(secondInt)){ //If first int is bigger print it
		alert("The larger number was " + firstInt);
	}else{ // if second int is bigger print it
		alert("The larger number was " + secondInt);
	}
}

function order(){
	document.getElementById("myList").innerHTML = ""; //Calls the my list element and wipes its contents

	let orderNums = [0, 0, 0]; //Declares the array orderNums
	orderNums[0] = prompt("What is the first number?"); //Sets first position
	orderNums[1] = prompt("What is the second number?"); //Sets second position
	orderNums[2] = prompt("What is the third number?"); //Sets third position

	orderNums.sort(function(a, b){return a - b}); //orders the array from least to greatest with a preset function
	alert("From least to greatest the numbers are as follows: " + orderNums); //Prints the new, ordered array
}

function fizzBuzz(){
	alert("Let's play FizzBuzz!"); //Lets the person know what's going on 
	document.getElementById("myList").innerHTML = ""; //Calls the my list element and wipes its contents

	for(var i = 1; i <= 100; i++){ //as long as i is less than 100 the program will run (it will run 100 times)
		if(Number.isInteger(i/3) && Number.isInteger(i/5)){ //If the number devided by both three and five is an integer
			var node = document.createElement("LI"); //Creates a list element
			var textnode = document.createTextNode("FizzBuzz"); //Sets textnode to "FizzBuzz"
		    node.appendChild(textnode); //Makes textnode the next in the node
		    document.getElementById("myList").appendChild(node); //Shoves node to the end of the list

		}else if(Number.isInteger(i/3)){ //If the number devided by three is an integer
			var node = document.createElement("LI"); //Creates a list element
			var textnode = document.createTextNode("Fizz"); //Sets textnode to "Fizz"
		    node.appendChild(textnode); //Makes textnode the next in the node
		    document.getElementById("myList").appendChild(node); //Shoves node to the end of the list

		}else if(Number.isInteger(i/5)){
			var node = document.createElement("LI"); //Creates a list element
			var textnode = document.createTextNode("Buzz"); //Sets textnode to "Buzz"
		    node.appendChild(textnode); //Makes textnode the next in the node
		    document.getElementById("myList").appendChild(node); //Shoves node to the end of the list

		}else{
			var node = document.createElement("LI"); //Creates a list element
			var textnode = document.createTextNode(i); //Sets textnode to "i"
		    node.appendChild(textnode); //Makes textnode the next in the node
		    document.getElementById("myList").appendChild(node); //Shoves node to the end of the list

		}
	}
}

function astrix(){
	alert("Behold the pyramid of stars!"); //Gives a cool greating
	document.getElementById("myList").innerHTML = ""; //Calls the element mylist and wipes the contents

	for(var i = 1; i <= 5; i++){ //As long as i is less than or equal to 5 the program will run (it will run 5 times)
		var str = "* "; //sets the variable str to an astrix with a space

		var node = document.createElement("LI"); //Creates a list element
		var textnode = document.createTextNode(str.repeat(i)); //Sets textnode to str, repeated i times
		node.appendChild(textnode); //Makes textnode the next in the node
		document.getElementById("myList").appendChild(node); //Shoves node to the end of the list
		
	}
}

function grader(){
	let para = document.createElement("p"); //Creates a paragraph element and declares it as var para
	let element = document.getElementById("ting1"); // makes var element be the item with id ting1
	let grades = [0, 0]; //Declares grades
	let type = prompt("Do you want weighted(w) or non-weighted grades?(n)"); //Declares variable type
	
	var node = document.createTextNode("Your marks are: "); //Makes node equal a textnode
	para.appendChild(node); //Adds node to the paragraph
	element.appendChild(para); //Shoves paragraph under ting one

	if(type == "w"){ //If you wanted weighted grades
		for(var i = 0; i < 4; i++){ //Makes loop run for the length of numGrades
			let baseGrade = parseInt(prompt("Enter grade number " + (i+1))); //Assigns the variable baseGrade as an input
			let weight = parseFloat(prompt("What factor of the mark is it worth? Enter as a DECIMAL")); //Assigns the var. weight 
			grades[i] = Math.round(baseGrade*weight); //Assigns the index i for grades as the baseGrade * weight

			var node = document.createTextNode(" " + baseGrade + " with a weight of " + weight +", "); //Makes a textnode of the value
			para.appendChild(node); //Shoves the textnode into para

		}var average = grades.reduce(function(total, amount){return total + amount}); //Adds the values in grades to find av.

	}else{ //If you didnt want weighted grades
		let numGrades = prompt("How many grades do you want to enter?"); //Declares numGrades

		for(var i = 0; i < numGrades; i++){ //Makes loop run for the length of numGrades
			grades[i] = parseInt(prompt("Enter grade number " + (i+1))); //Assigns the index i for grades as an imput
			var node = document.createTextNode(" " + grades[i] + ", "); //Makes a textnode of the value
			para.appendChild(node) //Shoves the textnode into para
	
	}var average = grades.reduce(function(total, amount){return total + amount})/numGrades; //Adds all the values in grades and finds av.
	
	}

	var node = document.createTextNode("Your average is " + average + "."); //Makes a textnode with the average
	para.appendChild(node); //Shoves the textnode into para
}