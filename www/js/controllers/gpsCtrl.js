angular.module('trail').controller('gpsCtrl', function($scope, $cordovaGeolocation, $interval, gpsSvc) {
  $interval(function() {

    var geoSettings = {
      frequency: 3000,
      timeout: 5000,
      enableHighAccuracy: true
    };

    var geo = $cordovaGeolocation.getCurrentPosition(geoSettings);

    geo.then(function(position) {
        $scope.lat = position.coords.latitude;
        $scope.long = position.coords.longitude;
        $scope.altitude = position.coords.altitude;
        $scope.heading = position.coords.heading;
        $scope.timestamp = position.timestamp;

      },
      function error(err) {
        $scope.errors = err;
      }
    );
  }, 1000);

  $scope.startPoint = function() {
    console.log($scope.lat);
    console.log($scope.long);
    gpsSvc.startGPS({lat: 1234, long: 8675309}).then(function(res) {
      console.log(res.data);
    });
  };
});
