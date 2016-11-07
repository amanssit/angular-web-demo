/**
 * Created by I5 6tg on 11/7/2016.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            "/work",
            {
                templateUrl: "app/view/work/work.html",
                controller: "WorkCtrl"
            }
        );
}]);

app.controller('WorkCtrl', function (/* $scope, $location, $http */) {
    console.log("Testing WorkCtrl");
});