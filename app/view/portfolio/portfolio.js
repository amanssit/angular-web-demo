/**
 * Created by I5 6tg on 11/7/2016.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            "/portfolio",
            {
                templateUrl: "app/view/portfolio/portfolio.html",
                controller: "PortfolioCtrl"
            }
        );
}]);

app.controller('PortfolioCtrl', function (/* $scope, $location, $http */) {
    console.log("Testing PortfolioCtrl");
});