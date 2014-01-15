// Starting with Brazil
var brasil = true;
// Array of moves made by player(s)
var moves = [[null, null, null], [null, null, null], [null, null, null]];
// How we capture the click and assign it to either brasil(b) or argentina(a)
var row;
var cell;
// To check win conditions
var brasilwin;
var argentinawin;
var catsgame;
var windance = document.getElementById("mainfield");

//write this function in order for page to recognize the script on the page onload
function init() {
	//set variable as an array to collect all of the moves played
	var cells = document.getElementsByClassName("divCell");
	//use the for loop to 
	for(var i in cells) {
		cells[i].onclick = clickstuff;
	}
}
//defines function we use to mark the moves of the game
function clickstuff()
{
	//If nothing is in this (whatever was clicked) cell; "this." is the div clicked
	if(this.innerHTML == "")
	{
		//create new variables to track game plays by assigning a variable to the cell selected
		cell = this.id[4] - 1;
		row = this.id[3] - 1;

		if (brasil)
		{
			this.innerHTML="<img src='img/brasil.jpg'>";
			//moves tells you which cell to add point
			moves [cell][row] = "b";
			//switch player by setting brasil to false
			brasil = false;
			
		}
		//if not brasil then argentina	
		else
		{
			this.innerHTML='<img src="img/argentina.jpg">';
			moves [cell][row] = "a";
			brasil = true;
		}
	}
	else
	{
		//if cell is not empty then alert player to choose a different cell
		alert("Please select a different cell.");
	}

//run the check win function to see if there is a winner after each click
checkWin();
//close out the function
}


//Single function to check if either team is a winner or if it is a cat's game
function checkWin()
{
	//if any of these situations are true, then brasil wins
	if ((moves[0][0] + moves[0][1] + moves[0][2] == "bbb")
		|| (moves[1][0] + moves[1][1] + moves[1][2] == "bbb")
		|| (moves[2][0] + moves[2][1] + moves[2][2] == "bbb")
		|| (moves[0][0] + moves[1][1] + moves[2][2] == "bbb")
		|| (moves[2][0] + moves[1][1] + moves[0][2] == "bbb")
		|| (moves[0][0] + moves[1][0] + moves[2][0] == "bbb")
		|| (moves[0][1] + moves[1][1] + moves[2][1] == "bbb")
		|| (moves[0][2] + moves[1][2] + moves[2][2] == "bbb")) 
	{	
		brasilwin = true;
		//swap out the mainfield image with an alternative image if brasil is a winner
		windance = document.getElementById("mainfield");
		windance.style.backgroundImage = "url('img/brasilgol.jpg')";
	}
	//else, if any of these situations are true, then brasil wins
	else if ((moves[0][0] + moves[0][1] + moves[0][2] == "aaa")
		|| (moves[1][0] + moves[1][1] + moves[1][2] == "aaa")
		|| (moves[2][0] + moves[2][1] + moves[2][2] == "aaa")
		|| (moves[0][0] + moves[1][1] + moves[2][2] == "aaa")
		|| (moves[2][0] + moves[1][1] + moves[0][2] == "aaa")
		|| (moves[0][0] + moves[1][0] + moves[2][0] == "aaa")
		|| (moves[0][1] + moves[1][1] + moves[2][1] == "aaa")
		|| (moves[0][2] + moves[1][2] + moves[2][2] == "aaa"))
		{
		argentinawin = true;
		//swap out the mainfield image with an alternative image if argentina is a winner
		windance = document.getElementById("mainfield");
		windance.style.backgroundImage = "url('img/argentinagol.jpg')";
	}
	//else, if there have been 9 plays and there is still no winner, then it is a cat's game
	else if (moves[0][0] !== null
			&& moves[0][1] !== null
			&& moves[0][2] !== null
			&& moves[1][0] !== null
			&& moves[1][1] !== null
			&& moves[1][2] !== null
			&& moves[2][0] !== null
			&& moves[2][1] !== null
			&& moves[2][2] !== null)
		{
			alert("MEOW!");
	}	
	//else, if there was a play but there is no winner and the game is not over
	else
	{
		return false;
	}
}


