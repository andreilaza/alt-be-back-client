angular.module('starter.controllers')
  .controller('ScannerCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPopup) {



    $scope.scanBarcode = function () {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log('format', imageData.format);

      }, function(error) {
        console.log('error', error);
      });
    }


  });