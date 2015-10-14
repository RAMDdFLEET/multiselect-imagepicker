// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('HomeCtrl', ['$scope', '$rootScope', '$cordovaCamera', function($scope, $rootScope, $cordovaCamera) {

  $scope.ready = false;
  $scope.images = [];
  
  $rootScope.$watch('appReady.status', function() {
    alert('watch fired '+$rootScope.appReady.status);
    if($rootScope.appReady.status) $scope.ready = true;
  });

  $scope.selImages = function() {
    
    window.imagePicker.getPictures(
      function(results) {
        for (var i = 0; i < results.length; i++) {
          alert('Image URI: ' + results[i]);
          $scope.images.push(results[i]);
        }
        if(!$scope.$$phase) {
          $scope.$apply();
        }
      }, function (error) {
        alert('Error: ' + error);
      }
    );

  };
  
}])