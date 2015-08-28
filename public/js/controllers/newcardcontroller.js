app.controller('NewCardController', function($scope, $http, FlashCardsFactory){
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
		if ($scope.newCardForm.$valid){
			console.log("is valid");
			$http.post('/cards', $scope.newCard).then(function(res){
				console.log("res.data: " + res.data);
				$scope.newCard = {
	    	question: null,
	    	category: null,
	    	answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	    console.log(FlashCardsFactory);
  //   FlashCardsFactory.getFlashCards(FlashCardsFactory.currentCategory).then(function(cards){
  //     // $scope.flashCards = cards;
  //     console.log(FlashCardsFactory);
  //   }).catch(function(err){
  //     $log.error('error getting cards:', err);
  //   })
  // };
	};
			});
		}
		else {
			console.log("is not valid");
		}
	};

});