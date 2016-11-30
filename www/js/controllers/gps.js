// angular.module('starter').controller('gpsCtrl', ['$scope', '$cordovaGeolocation', '$interval', function($scope, $cordovaGeolocation, $interval) {
//   $interval(function() {
//
//     var geoSettings = {
//       frequency: 3000,
//       timeout: 5000,
//       enableHighAccuracy: true
//     };
//
//     var geo = $cordovaGeolocation.getCurrentPosition(geoSettings);
//
//     geo.then(function(position) {
//         $scope.latitude = position.coords.latitude;
//         $scope.longitude = position.coords.longitude;
//         $scope.altitude = position.coords.altitude;
//         $scope.heading = position.coords.heading;
//         $scope.timestamp = position.timestamp;
//
//       },
//       function error(err) {
// $scope.errors = err;
// }
//     );
//   }, 1000);
//
// }]);
