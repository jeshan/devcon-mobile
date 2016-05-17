app.controller('SavedSessionsCtrl', function ($scope, $window, $timeout, $ionicPopup) {

  $timeout(function () {
    var savedEvents = $window.localStorage['saved-events'];
    if (!savedEvents) {
      savedEvents = '[]';
    }
    $scope.events = JSON.parse(savedEvents);

    if ($scope.events.length === 0) {
      $ionicPopup.alert({
        title: 'Nothing to show here',
        template: 'Save a session by holding on its entry in the session lists.'
      });
    }
  });
});
