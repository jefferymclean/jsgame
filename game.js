var player1Lives = 3; 
var player2Lives = 3; 
var currentPlayer = 1; //player 1 is currently playing. 

var ADD = 0;
var SUB = 1;
var MUL = 2;
//loop below that keeps going til player 1 OR 2
//has 0 lives yet.
// 0 -> 1 
function getRandom( max ) {
	return ( max * Math.floor( Math.random() ) ); 
}

while( (player1Lives > 0) && (player2Lives > 0) )
{
	var operator		  = getRandom(3); // 0, 1 , 2;
	var value1 	 			= getRandom(20);
	var value2   			= getRandom(20); 
	var correctAnswer, userAnswer; 

	if (operator == ADD) {
		(correctAnswer = (value1 + value2) )
	} 
	else if (operator == SUB) {
		(correctAnswer = (value1 - value2) )
	} 
	else (operator == MUL) {
		(correctAnswer = (value1 * value2) )
	} 
	userAnswer = prompt("What's the answer to this Q?"); 

	if (userAnswer == correctAnswer) { 
		alert("You're totally right dude!")
	}
	else {
		alert("You're wrong...and dumb.")
	}

	if (currentPlayer == 1) {
		
	}

 
}
	