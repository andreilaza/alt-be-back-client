angular.module('alt.scanner', [])
  .controller('ScannerCtrl', function ($scope, $cordovaBarcodeScanner, $ionicModal, $state, $timeout, Notification, EventService, Auth) {
    //Auth.check();


    var initScanner = function () {

      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {

          if (barcodeData.cancelled === 1) {
            $state.go('tab.feeds.list');
            return;
          }
          return EventService.checkin(barcodeData.text, Auth.getMemberId())
            .then(function(result) {
              $scope.scanResult = result.data;
              $scope.openModal();
              Notification.success('Scan successful');
            }, function(error) {
              Notification.error(error);
            });
        }, function(error) {
          $scope.scanResult = error;
          $scope.openModal();
          Notification.error('Scan failed');
        });


    };


    document.addEventListener("deviceready", initScanner, false);


    $ionicModal.fromTemplateUrl('js/scanner/splash.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $state.go('tab.feeds.list');
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });

  });