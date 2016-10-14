(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishesList = '';
  $scope.userMsg = '';
  $scope.check = function (){
    if(!$scope.dishesList){
      $scope.userMsg = 'Please enter data first'
      return;
    }
    var dishesArr = $scope.dishesList.split(',');
    if(dishesArr.length < 4){
      $scope.userMsg = 'Enjoy!';
      $scope.style = {'color':'green'}
    }
    else{ 
      $scope.userMsg = 'Too much!'
      $scope.style = {'color':'red'}
    }
  }
}
})();
