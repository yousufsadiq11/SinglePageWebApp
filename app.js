'use strict';
angular.module('AngularTest',[])
.controller('controllertest',['$scope','$filter',function($scope,$filter){

$scope.name="";
$scope.convert=function(){
  var z=$filter('uppercase');
  $scope.name=z($scope.name);

};
}]);
