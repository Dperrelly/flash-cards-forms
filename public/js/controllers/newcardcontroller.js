app.controller('NewCardController', function($scope, $http, FlashCardsFactory){

    FlashCardsFactory.getFlashCards(FlashCardsFactory.currentCategory).then(function(cards){
      // $scope.flashCards = cards;
      console.log(FlashCardsFactory.currentCategory);
    }).catch(function(err){
      $log.error('error getting cards:', err);
    });

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
				};
				console.log(FlashCardsFactory.currentCategory);
			FlashCardsFactory.getCategoryCards(FlashCardsFactory.currentCategory);
			});
		}
		else {
			console.log("is not valid");
		}
	};
});

