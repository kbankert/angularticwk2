//controller to control the game play i.e. trigger ball to pop up in each square


function gameCtrl ($scope) {
	$scope.teams = [
		{team: "Brasil",
		turn: false,
		tracking: "b",
		gamepiece: "img/brasil.jpg",
		golimg: "img/brasilgol.jpg",
		score: 0,
		win: false},
		
		{team: "Argentina",
		turn: false,
		tracking: "a",
		gamepiece: "img/argentina.jpg",
		golimg: "img/argentinagol.jpg",
		score: 0,
		win: false},

		{team: "USA",
		turn: false,
		tracking: "u",
		gamepiece: "img/usa.jpg",
		golimg: "img/argentinagol.jpg",
		score: 0,
		win: false},

		{team: "Spain",
		turn: false,
		tracking: "g",
		gamepiece: "img/spain.jpg",
		golimg: "img/spaingol.jpg",
		score: 0,
		win: false}];


	$scope.teams[0].turn = true;

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

	$scope.winImg = document.getElementById("mainfield");
	
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
			$scope.teams[0].win = true;
			//swap out the mainfield image with an alternative image if brasil is a winner
			
			//this is not working...goes straight to tally a point but skips the celebration image
			$scope.winImg = document.getElementById("mainfield").src;
			$scope.winImg.style.background.src="$scope.teams[0].golimg";
			
			// $scope.winImg.style.backgroundImage = "url('img/brasilgol.jpg')";
			
			$scope.teams[0].score++;
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
			$scope.teams[1].win = true;
			//swap out the mainfield image with an alternative image if argentina is a winner
			$scope.winImg.style.backgroundImage = $scope.teams[1].golimg;
			$scope.teams[1].score++;
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

	$scope.clearBoard = function () {
		$scope.winImg.style.backgroundImage = "url('img/field.jpg')";
		for (var row = 0; row < $scope.cellsDisplay.length; row++) {
			for (var col = 0; col < $scope.cellsDisplay.length; col++) {
				$scope.cellsDisplay[row][col] = 'img/blank.png';
				$scope.cellsScore[row][col] = null;
			}
			
		}
		console.log($scope.cellsScore);
	};
}



