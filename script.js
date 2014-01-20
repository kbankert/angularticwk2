//controller to control the game play i.e. trigger ball to pop up in each square

brasilScoreCount = 0;
argentinaScoreCount = 0;

function gameCtrl ($scope) {
	$scope.teams = [
		{team: "Brasil",
		turn: true,
		tracking: "b",
		gamepiece: "img/brasil.jpg",
		golimg: "img/brasilgol.jpg"},
		
		{team: "Argentina",
		turn: false,
		tracking: "a",
		gamepiece: "img/argentina.jpg",
		golimg: "img/argentinagol.jpg"}];


	$scope.cellsDisplay = [
		["","",""],
		["","",""],
		["","",""]
	];

	$scope.cellsScore = [	
		[null,null,null],
		[null,null,null],
		[null,null,null]
	];

	$scope.brasilwin = false;
	$scope.argentinawin = false;
	$scope.windance = document.getElementById("mainfield");
	$scope.brasilScoreCount = 0;
	$scope.argentinaScoreCount = 0;
	
	$scope.play = function(row, col) {

		if($scope.cellsScore[row][col] == null) {

			if ($scope.teams[0].turn == true) {
				$scope.cellsDisplay[row][col] = $scope.teams[0].gamepiece;
				$scope.cellsScore[row][col] = $scope.teams[0].tracking;

			} else {
				$scope.cellsDisplay[row][col] = $scope.teams[1].gamepiece;
				$scope.cellsScore[row][col] = $scope.teams[1].tracking;
			}

			//if any of these situations are true, then brasil wins
			
			$scope.teams[0].turn = !$scope.teams[0].turn;
			$scope.checkWin();
			}
			else {
			alert("Defender snagged the ball. Choose a different cell.");
			}
		};	

	$scope.checkWin = function() {
		if (($scope.cellsScore[0][0] + $scope.cellsScore[0][1] + $scope.cellsScore[0][2] == "bbb")
			|| ($scope.cellsScore[1][0] + $scope.cellsScore[1][1] + $scope.cellsScore[1][2] == "bbb")
			|| ($scope.cellsScore[2][0] + $scope.cellsScore[2][1] + $scope.cellsScore[2][2] == "bbb")
			|| ($scope.cellsScore[0][0] + $scope.cellsScore[1][1] + $scope.cellsScore[2][2] == "bbb")
			|| ($scope.cellsScore[2][0] + $scope.cellsScore[1][1] + $scope.cellsScore[0][2] == "bbb")
			|| ($scope.cellsScore[0][0] + $scope.cellsScore[1][0] + $scope.cellsScore[2][0] == "bbb")
			|| ($scope.cellsScore[0][1] + $scope.cellsScore[1][1] + $scope.cellsScore[2][1] == "bbb")
			|| ($scope.cellsScore[0][2] + $scope.cellsScore[1][2] + $scope.cellsScore[2][2] == "bbb")) 
		{	
			brasilwin = true;
			//swap out the mainfield image with an alternative image if brasil is a winner
			$scope.windance.style.backgroundImage = "url('img/brasilgol.jpg')";
			$scope.brasilScoreCount++;
			console.log($scope.brasilScoreCount);
		}
		//else, if any of these situations are true, then brasil wins
		else if (($scope.cellsScore[0][0] + $scope.cellsScore[0][1] + $scope.cellsScore[0][2] == "aaa")
			|| ($scope.cellsScore[1][0] + $scope.cellsScore[1][1] + $scope.cellsScore[1][2] == "aaa")
			|| ($scope.cellsScore[2][0] + $scope.cellsScore[2][1] + $scope.cellsScore[2][2] == "aaa")
			|| ($scope.cellsScore[0][0] + $scope.cellsScore[1][1] + $scope.cellsScore[2][2] == "aaa")
			|| ($scope.cellsScore[2][0] + $scope.cellsScore[1][1] + $scope.cellsScore[0][2] == "aaa")
			|| ($scope.cellsScore[0][0] + $scope.cellsScore[1][0] + $scope.cellsScore[2][0] == "aaa")
			|| ($scope.cellsScore[0][1] + $scope.cellsScore[1][1] + $scope.cellsScore[2][1] == "aaa")
			|| ($scope.cellsScore[0][2] + $scope.cellsScore[1][2] + $scope.cellsScore[2][2] == "aaa"))
		{
			argentinawin = true;
			//swap out the mainfield image with an alternative image if argentina is a winner
			$scope.windance.style.backgroundImage = "url('img/argentinagol.jpg')";
			$scope.argentinaScoreCount++;
		}
		//else, if there have been 9 plays and there is still no winner, then it is a cat's game
		else if ($scope.cellsScore[0][0] !== null
				&& $scope.cellsScore[0][1] !== null
				&& $scope.cellsScore[0][2] !== null
				&& $scope.cellsScore[1][0] !== null
				&& $scope.cellsScore[1][1] !== null
				&& $scope.cellsScore[1][2] !== null
				&& $scope.cellsScore[2][0] !== null
				&& $scope.cellsScore[2][1] !== null
				&& $scope.cellsScore[2][2] !== null)
		{
				alert("MEOW!");
		}	
		//else, if there was a play but there is no winner and the game is not over
		else
		{
			return false;
		}
	};

	// $scope.clearBoard = function () {
	// 	$scope.windance.style.backgroundImage = "url('img/mainfield.jpg')";
	// 	$scope.cellsDisplay = [["","",""],["","",""],["","",""]];
	// };

	$scope.clearBoard = function () {
		$scope.windance.style.backgroundImage = "url('img/field.jpg')";
		for (var row = 0; row < $scope.cellsDisplay.length; row++) {
			for (var col = 0; col < $scope.cellsDisplay.length; col++) {
				$scope.cellsDisplay[row][col] = 'img/blank.png';
				$scope.cellsScore[row][col] = null;
			}
			
		}
		console.log($scope.cellsScore);
	};
}



