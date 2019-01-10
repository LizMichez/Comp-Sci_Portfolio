var canvas = document.getElementById("myCanvas");  // Gets the canfas element
var ctx = canvas.getContext("2d");  // Gets the 2d context, in other workds you are now working directly on the canvas

var x = canvas.width/2; // Starting position x value
var y = canvas.height-30; // Starting position y value

var dx = 2;  // The increments that the balls x position increace by (ball moves right)
var dy = -2;  // The increments that the balls y position decreace by (ball goes up)

var ballRadius = 10;  // Defines size of ball

var paddleHeight = 10;  // Defines height of paddle
var paddleWidth = 75;  // defines width of paddle
var paddleX = (canvas.width-paddleWidth)/2;  // Sets a starting position for hte paddle

var rightPressed = false;  // Defines a variable for moving right
var leftPressed = false;  // Defines a variable for moving left

var brickRowCount = 3;  // Defines how many columns of bricks there will be
var brickColumnCount = 5;  // Defines how many rows of brincks there will be
var brickWidth = 75;  // Defines how wide the bricks are
var brickHeight = 20;  // Defines how tall the bricks are
var brickPadding = 10;  // Defines the padding of the brick
var brickOffsetTop = 30;  // Defines the distance between the bricks and the top of the canvas
var brickOffsetLeft = 30;  // Defines the distance between the bricks and the left of the canvas

var bricks = [];  // Defines an empty array
for(var c=0; c<brickColumnCount; c++) {  // For as long as the variable c is less than the number of columns
    bricks[c] = [];  // Creates an array within the array for each column
    for(var r=0; r<brickRowCount; r++) {  // For as long as the variable r is less than the number of rows
        bricks[c][r] = { x: 0, y: 0, status: 1 };  // Creates an array within the array within the array with stored values
    }
}

var score = 0; // Defines score as zero

function drawBall() {  //This function draws the ball
    ctx.beginPath();  //Begins path
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);  // Calls arc and sets starting position coordinates, radius, amount drawn, formula to use
    ctx.fillStyle = "#0095DD";  // Makes the fill colour blue
    ctx.fill();  // Fills the ball with blue
    ctx.closePath();  // Finishes path

   	if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {  // If the ball touches the walls
   		dx = -dx;  // Make the ball-x-movelemt increment negativly (ball moves in the opposite direction)
	}
	if(y + dy < ballRadius) {  // If the ball is touching the top
   		dy = -dy;  // Make the ball-y-movement increment negativly (ball moves in the opposite direction)
	} else if(y + dy > canvas.height-ballRadius) {  // If the ball is touching the top of the canvas
	    if(x > paddleX && x < paddleX + paddleWidth) {  // If the ball is within the x coordinates of the paddle
	        dy = -dy; // Make the ball-y-movement increment negativly (ball moves in the opposite direction)
    } else {  // If the ball hits the bottom outside the paddle
        alert("GAME OVER");  // Alert that the game is over
        document.location.reload();  // Restart the game
    }
	}
}

function drawPaddle() {  // This function creates the paddle
    ctx.beginPath();  // Starts path (drawing)
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);  // Draws a rectangle based off of certain paramiters
    ctx.fillStyle = "#0095DD";  // Sets fill style to a specified colour
    ctx.fill();  // Fills the rectanle with the fill style
    ctx.closePath();  // Ends path (drawing)
}

function drawBricks() {  // This function draws the bricks
    for(var c=0; c<brickColumnCount; c++) {  // For as long as the variable c is less than the number of columns
        for(var r=0; r<brickRowCount; r++) {  // For as long as the variable r is less than the number of rows
            if(bricks[c][r].status == 1) {  // As long as the value status within the brick is one
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;  // Creates the variable brickX based on some quick math
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;  // Creates the variable brickY based on some quick math
                bricks[c][r].x = brickX;  // Sets the x position of the brick to brickX
                bricks[c][r].y = brickY;  // Sets the y position of the brick to brickY
                ctx.beginPath();  // Begins the path
                ctx.rect(brickX, brickY, brickWidth, brickHeight);  // Draws a rectangle based off of certain paramiters
                ctx.fillStyle = "#0095DD";  // Sets fill style to a specified colour
                ctx.fill();  // Fills the rectanle with the fill style
                ctx.closePath();  // Ends path (drawing)
            }
        }
    }
}

function collisionDetection() {  // This function detects coll
    for(var c=0; c<brickColumnCount; c++) {  // For as long as the variable c is less than the number of columns
        for(var r=0; r<brickRowCount; r++) {  // For as long as the variable r is less than the number of rows
            var b = bricks[c][r];  // Defines variable b as the specific row within the column that the  
            if(b.status == 1) {  // If the value of status stored within the speciffied array is 1
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {  // If the coordinates of the center of the ball are within the coordinates of the brick
                    dy = -dy;  // Make the ball-y-movement increment negativly (ball moves in the opposite direction)
                    b.status = 0;  // Set the value status stored within the specified array to 0
                    score++;  // Increace score by 1
                    if(score == brickRowCount*brickColumnCount) {  // If you have destroyed all the blocks
                        alert("YOU WIN, CONGRATULATIONS!");  // Send an alert
                        document.location.reload();  // Reload (restart) the game
                    }
                }
            }
        }
    }
}

function drawScore() {  // Draws the score on the top left of the page
    ctx.font = "16px Arial";  // Sets the font of the text
    ctx.fillStyle = "#0095DD";  // Sets the colour of the text
    ctx.fillText("Score: "+score, 8, 20);  // Sets the value to be desplayed as well as where to desplay it
}

function draw() {  // This fucntion moves the ball
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clears canvas
    drawBricks();  // Calls the function that draws bricks
    drawBall();  // Calls draw ball function
    drawPaddle();  // Draw the game paddle and move it
    collisionDetection();  // Calls the function that detects collisions (also ends game)
    drawScore();  // Calls the function that draws the score
    x += dx;  // Makes ball move (X value)
    y += dy;  // Makes ball move (Y value)

    if(rightPressed && paddleX < canvas.width-paddleWidth) {  // If the right arrow key is pressed
    paddleX += 7;  // Increace paddleX by 7
	}
	else if(leftPressed && paddleX > 0) {  // If the left arrow key is pressed
	    paddleX -= 7;  // Decreace paddleX by 7
	}
}

document.addEventListener("keydown", keyDownHandler, false);  // Adds an even listener for when a key is pressed
document.addEventListener("keyup", keyUpHandler, false);  // Adds an event listener for when the key is not pressed

function keyDownHandler(e) {  // This function deals with when keys are being pressed
    if(e.keyCode == 39) {  // If you are pressing the right arrow key
        rightPressed = true;  // Set the var rightPressed to true
    }
    else if(e.keyCode == 37) {  // If you are pressing the left arrow key
        leftPressed = true;  // Sets the var leftPressed to true
    }
}

function keyUpHandler(e) {  //This function deals with when keys are not being pressed
    if(e.keyCode == 39) {  // If you are not pressing the right arrow key
        rightPressed = false;  // Set the var rightPressed to false
    }
    else if(e.keyCode == 37) {  // If you are not pressing the left arrow key
        leftPressed = false;  // Sets the var leftPressed to false
    }
}


setInterval(draw, 10);  // Calls the draw function every 10 seconds