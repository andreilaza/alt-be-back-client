angular.module('alt.scanner', [])
  .controller('ScannerCtrl', function ($scope, $cordovaBarcodeScanner, EventService, Auth) {
    //Auth.check();


    EventService.checkin('5573bc4fe28d6ddc7f0d0e35', user._id);
    document.addEventListener("deviceready", function () {

      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          return EventService.checkin(barcodeData.text, Auth.getUser()._id);
        }, function(error) {
          alert('error');
        });


    }, false);

  });