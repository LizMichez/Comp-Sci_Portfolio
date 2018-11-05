function bigger(){
	document.getElementById("myList").innerHTML = "";

	let firstInt = prompt("What's the first number?");
	let secondInt = prompt("What's the second number?");

	if(parseInt(firstInt) >= parseInt(secondInt)){
		alert("The larger number was " + firstInt);
	}else{
		alert("The larger number was " + secondInt);
	}
}

function order(){
	document.getElementById("myList").innerHTML = "";

	let orderNums = [0, 0, 0];
	orderNums[0] = prompt("What is the first number?");
	orderNums[1] = prompt("What is the second number?");
	orderNums[2] = prompt("What is the third number?");

	orderNums.sort(function(a, b){return a - b}); 
	alert("From least to greatest the numbers are as follows: " + orderNums);
}

function fizzBuzz(){
	alert("Let's play FizzBuzz!");
	document.getElementById("myList").innerHTML = "";

	for(var i = 1; i <= 100; i++){
		if(Number.isInteger(i/3) && Number.isInteger(i/5)){
			var node = document.createElement("LI"); //Creates a list element
			var textnode = document.createTextNode("FizzBuzz"); //Creates a bit of text and sets it to "FizzBuzz"
		    node.appendChild(textnode); //Makes textnode the next in the node
		    document.getElementById("myList").appendChild(node); //Shoves node to the end of the list

		}else if(Number.isInteger(i/3)){
			var node = document.createElement("LI"); 
			var textnode = document.createTextNode("Fizz");
		    node.appendChild(textnode);
		    document.getElementById("myList").appendChild(node);

		}else if(Number.isInteger(i/5)){
			var node = document.createElement("LI");
			var textnode = document.createTextNode("Buzz");
		    node.appendChild(textnode);
		    document.getElementById("myList").appendChild(node);

		}else{
			var node = document.createElement("LI");
			var textnode = document.createTextNode(i);
		    node.appendChild(textnode);
		    document.getElementById("myList").appendChild(node);
		}
	}
}

function astrix(){
	alert("Behold the pyramid of stars!");
	document.getElementById("myList").innerHTML = "";

	for(var i = 1; i <= 5; i++){
		var str = "* ";

		var node = document.createElement("LI"); 
		var textnode = document.createTextNode(str.repeat(i));
		node.appendChild(textnode);
		document.getElementById("myList").appendChild(node);
		
	}
}