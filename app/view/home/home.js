/**
 * Created by I5 6tg on 11/7/2016.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            "/",
            {
                templateUrl: "app/view/home/home.html",
                controller: "HomeCtrl"
            }
        );
}]);

app.controller('HomeCtrl', function (/* $scope, $location, $http */) {
    console.log("Testing HomeCtrl");
});