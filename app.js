'use strict';
angular.module('AngularTest',[])
.controller('controllertest',['$scope','$filter',function($scope,$filter){
var test=$scope;
test.name="";
test.convert=function(){
  var z=$filter('uppercase');
  test.name=z(test.name);

};
}]);
