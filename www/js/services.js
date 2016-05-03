/**
 * User: jeshan
 * Date: 03/05/16
 * Time: 23:25
 */
app.factory('sessionService', function ($log, $http, $q, $timeout) {
  var entries = [];

  return {
    getList: function (next) {
      // https://spreadsheets.google.com/feeds/worksheets/1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw/public/full
      var key = "1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw";
      var sheet = "od6";

      switch (next) {
        case 2:
          sheet = "otxbfq6";
          break;
        case 3:
          sheet = "o3xkksm";
          break;
      }
      var feedUrl = "https://spreadsheets.google.com/feeds/list/" + key + "/" + sheet + "/public/values?alt=json&callback=JSON_CALLBACK";

      return $q(function (resolve, reject) {
        $timeout(function () {
          var feedList = [];
          $http.jsonp(feedUrl)
            .success(function (data) {
              angular.forEach(data.feed.entry, function (entryX) {
                feedList.push(entryX);
              });

              var response = _.map(feedList, function (item) {
                return {
                  abstract: item.gsx$abstract.$t,
                  language: item.gsx$language.$t,
                  level: item.gsx$level.$t,
                  room: item.gsx$room ? item.gsx$room.$t : undefined,
                  speaker: item.gsx$speaker.$t,
                  time: item.gsx$time.$t,
                  title: item.gsx$title.$t,
                  updated: item.updated.$t
                }
              });

              resolve(response);
              //angular.copy(feedList, entries);
              //next(data);
            })
            .error(function (data) {
              next({error: true, data: data});
            });
        });
      });

    },
    entries: entries
  };
});
