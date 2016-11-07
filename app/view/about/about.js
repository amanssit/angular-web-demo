/**
 * Created by I5 6tg on 11/7/2016.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            "/about",
            {
                templateUrl: "app/view/about/about.html",
                controller: "AboutCtrl"
            }
        );
}]);

app.controller('AboutCtrl', function (/* $scope, $location, $http */) {
    console.log("Testing AboutCtrl");
});