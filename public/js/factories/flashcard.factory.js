app.factory('FlashCardsFactory', function($http) {

  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  var currentCategory = {};

  function getFlashCards(category) {
    var config = {};
    if (category) config.params = { category: category };
    return $http.get('/cards/', config).then(function(response){
      return response.data;
    });
  }
  return {
    getFlashCards: getFlashCards,
    categories: categories,
    currentCategory: currentCategory 
  };
});


