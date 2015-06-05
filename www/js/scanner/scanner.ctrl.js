angular.module('alt.scanner', [])
  .controller('ScannerCtrl', function ($scope, $cordovaBarcodeScanner) {
    $scope.loading = true;


    $cordovaBarcodeScanner
      .scan()
      .then(function(imageData) {
        $scope.loading = false;
        alert(imageData.text);

      }, function(error) {
        $scope.loading = false;
        console.log('error', error);
      });




  });