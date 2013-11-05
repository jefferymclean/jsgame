var player1Lives = 3; 
var player2Lives = 3; 
var currentPlayer = 1; //player 1 is currently playing. 

var ADD = 0;
var SUB = 1;
var MUL = 2;

function changePlayer() {
if (currentPlayer == 1) {
			currentPlayer = 2; 
	}  else {
			currentPlayer = 1; 
	}
}
//loop below that keeps going til player 1 OR 2
//has 0 lives yet.
// 0 -> 1 
function getRandom( max ) {
	return ( max * Math.floor( Math.random() ) ); 
}

while( (player1Lives > 0) && (player2Lives > 0) )
{
	var operator		  = Math.floor(Math.random() *  3); // 0, 1 , 2;
	var value1 	 			= Math.floor(Math.random() * 20);
	var value2   			= Math.floor(Math.random() * 20); 
	var correctAnswer, userAnswer;
	 

	if (operator == ADD) {
		(correctAnswer = (value1 + value2) );
	}	else if (operator == SUB) {
		(correctAnswer = (value1 - value2) );
	} else {
		(correctAnswer = (value1 * value2) );
	} 

	userAnswer = prompt("Player " + ": " + "What is " + value1 + " " + operator + " " + value2 + "?" ); 

	if (userAnswer == correctAnswer) { 
		alert("You're totally right dude! ");
	}
	else {
		if (currentPlayer == 1) {
			player1Lives--;
		}	else {
			player2Lives--;
		}

		alert("You're wrong...and dumb.");
	}
	changePlayer(); 
	break; 
}

	