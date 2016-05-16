app.controller('LinuxScheduleCtrl', function ($scope, ionicMaterialInk, sessionService, $timeout, $window, $ionicLoading) {
  //ionic.material.ink.displayEffect();
  ionicMaterialInk.displayEffect();
  var index = 4;
  $scope.events = [];

  $timeout(function () {
    var dataForDay = $window.localStorage['devcon2016-day-' + index];
    if (!dataForDay) {
      $ionicLoading.show();
      sessionService.getList(index + 1).then(function (response) {
        $scope.saveResponse(index, response);
        $ionicLoading.hide();
      });
    } else {
      $scope.events = JSON.parse(dataForDay);
    }
  });

  $scope.refreshData = function () {
    sessionService.getList(index + 1).then(function (response) {
      $scope.saveResponse(index, response);
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.saveResponse = function (index, response) {
    $window.localStorage['devcon2016-day-' + index] = JSON.stringify(response);
    $scope.events = response;
  };

});
