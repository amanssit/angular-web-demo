/**
 * Created by I5 6tg on 11/7/2016.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            "/service",
            {
                templateUrl: "app/view/service/service.html",
                controller: "ServiceCtrl"
            }
        );
}]);

app.controller('ServiceCtrl', function (/* $scope, $location, $http */) {
    console.log("Testing ServiceCtrl");
});