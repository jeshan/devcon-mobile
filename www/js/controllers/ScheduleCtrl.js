app.controller('ScheduleCtrl', function ($scope, $stateParams, ionicMaterialInk, sessionService, $timeout, $ionicPopup, $window, $q, $ionicLoading) {
  //ionic.material.ink.displayEffect();
  ionicMaterialInk.displayEffect();

  $scope.events = [];
  $scope.selectTab = function (index) {
    $timeout(function () {
      var dataForDay = $window.localStorage['devcon2016-day-' + index];
      if (!dataForDay) {
        $ionicLoading.show();
        sessionService.getList(index + 1).then(function (response) {
          $scope.saveResponse(index, response);
          $ionicLoading.hide();
        });
      } else {
        $scope.events[index] = JSON.parse(dataForDay);
      }
    });
  };

  $scope.refreshData = function () {
    // separate calls, unfortunately
    var promises = [];
    promises[0] = sessionService.getList(1);
    promises[0].then(function (response) {
      $scope.saveResponse(0, response);
    });

    promises[1] = sessionService.getList(2);
    promises[1].then(function (response) {
      $scope.saveResponse(1, response);
    });

    promises[2] = sessionService.getList(3);
    promises[2].then(function (response) {
      $scope.saveResponse(2, response);
    });

    $q.all(promises).then(function () {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.saveResponse = function (index, response) {
    $window.localStorage['devcon2016-day-' + index] = JSON.stringify(response);
    $scope.events[index] = response;
  };

  $scope.showEventDetails = function (event) {
    if (!event.abstract) {
      $ionicPopup.alert({
        title: 'Error',
        template: 'No info available for this session :('
      });
      return;
    }
    $ionicPopup.alert({
      title: event.title,
      template: event.abstract
    });
  };

  $scope.speakerImages = [
    {'chervine': 'img/speakers/ChervineBhiwoo.jpg'},
    {'clement': 'img/speakers/ClementKerneur.png'},
    {'dhiruj': 'img/speakers/DhirujRambaran.jpg'},
    {'eric': 'img/speakers/EricCoquelin.jpg'},
    {'ish': 'img/speakers/IshSookun.jpg'}
  ];

  $scope.speakerImage = function (name) {

  }
});
