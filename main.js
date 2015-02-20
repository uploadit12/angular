var app = angular.module('myApp', [])

app.factory('case', function() {
  return 'upcase'
})

app.controller('personController', function(){
  var self = this;
  self.label = 'click here to change me to up case'
  self.color = 'red'
  self.changeNameToUppercase = function() {
    if (/up case/.test(self.label)) {
      self.label = self.label.replace('up case', 'LOWER CASE').toUpperCase();
    } else {
      self.label = self.label.replace('LOWER CASE', 'up case').toLowerCase();
    }
  }
  self.changeCase = function (case_opt) {
    if (case_opt == 'upcase') {
      self.label = self.label.toUpperCase();
    } else {
      self.label = self.label.toLowerCase();
    }
  }

  self.currentColor = 'red'

  self.colorCollection = ['red', 'green', 'blue']

  self.manipulateClass = function() {
    self.currentColor = self.colorCollection[(self.colorCollection.indexOf(self.currentColor) + 1) % 3]
  }

})

app.controller('personController1', function($scope){
  // $scope.name= 'dada222121'
})

// app.directive('myname', function(scope, attrs) {
//   return function (){
//     return {
//       restrict: 'E',
//       template: '<div>My name is</div>'
//     }
//   }
// })
