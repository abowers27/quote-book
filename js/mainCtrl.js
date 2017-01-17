angular.module('myApp')
.controller('mainCtrl', function($scope, mainService) {

$scope.getQuotes = function() {
    $scope.quotes = mainService.getQuotes();
}
$scope.getQuotes();

$scope.addQuote = function(aQuote, anAuthor) {
     mainService.addQuote(aQuote, anAuthor);
}

$scope.killQuote = function(quote) {
    mainService.killQuote(quote);
}

})