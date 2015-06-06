angular.module('alt.scanner', [])
  .controller('ScannerCtrl', function ($scope, $cordovaBarcodeScanner, Auth) {
    //Auth.check();
    document.addEventListener("deviceready", function () {

      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          // Success! Barcode data is here
          alert(barcodeData);
        }, function(error) {
          // An error occurred
        });


    }, false);

  });