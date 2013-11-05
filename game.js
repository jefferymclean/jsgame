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
	var operator		    = Math.floor(Math.random() *  3); // 0, 1 , 2;
	var value1 	 			= Math.floor(Math.random() * 20); // 0 -> 19
	var value2   			= Math.floor(Math.random() * 20); // 0 -> 19
	var correctAnswer, userAnswer, operatorSymbol;

	if (operator == ADD) { // 0 
		(correctAnswer = (value1 + value2) );
		operatorSymbol = '+';
	} else if (operator == SUB) { // 1
		(correctAnswer = (value1 - value2) );
		operatorSymbol = '-';
	} else { // 2
		(correctAnswer = (value1 * value2) );
		operatorSymbol = 'x';
	}
	
	userAnswer = prompt("Player " + ": " + "What is " + value1 + " " + operatorSymbol + " " + value2 + "?" ); 

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

	