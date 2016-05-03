app.controller('ScheduleCtrl', function ($scope, $stateParams, ionicMaterialInk, sessionService, $timeout) {
  //ionic.material.ink.displayEffect();
  ionicMaterialInk.displayEffect();

  $scope.events = [];
  $scope.selectTab = function (index) {
    $timeout(function () {
      console.log("index", index);
      if (!$scope.events[index - 1]) {
        sessionService.getList(index).then(function (response) {
          $scope.events[index - 1] = response;
        });
      }
    });
  };
});
