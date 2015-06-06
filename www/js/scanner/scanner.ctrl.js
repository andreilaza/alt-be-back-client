angular.module('alt.scanner', [])
  .controller('ScannerCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPopup,  $ionicModal, Auth) {
    //Auth.check();
    $scope.loading = true;

  try {
    $cordovaBarcodeScanner
      .scan()
      .then(function (imageData) {
        $scope.loading = false;
        $scope.showPopup();

      }, function (error) {
        $scope.loading = false;
        console.log('error', error);
      });

  } catch(e) {
    console.log(e);
  }

    $scope.showPopup = function () {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '',
        title: 'Congratulations',
        subTitle: 'You have won 1300 points',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]
      });

      myPopup.then(function (res) {
        console.log('Tapped!', res);
      });
      $timeout(function () {
        myPopup.close(); //close the popup after 3 seconds for some reason
      }, 3000);
    };



    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

  });