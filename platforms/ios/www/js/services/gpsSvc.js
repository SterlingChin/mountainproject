angular.module('trail').service('gpsSvc', function($http){
this.startGPS = function(startCoords){
  return $http.post("https://trailcompserver.herokuapp.com/start", startCoords);
};
});
