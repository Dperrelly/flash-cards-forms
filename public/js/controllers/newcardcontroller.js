app.controller('NewCardController', function($scope, $http){
	// $scope.question = 2;
	// $scope.question = 
	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};
	$scope.submit = function(){
		$http.post('/cards', $scope.newCard).then(function(res){
			console.log("res.data: " + res.data);
		});
	};
});