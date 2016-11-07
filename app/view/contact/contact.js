/**
 * Created by I5 6tg on 11/7/2016.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            "/contact",
            {
                templateUrl: "app/view/contact/contact.html",
                controller: "ContactCtrl"
            }
        );
}]);

app.controller('ContactCtrl', function (/* $scope, $location, $http */) {
    console.log("Testing ContactCtrl");
});