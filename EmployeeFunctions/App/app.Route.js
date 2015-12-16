/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var MyApp;
(function (MyApp) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            //      $routeProvider.when("/home", { controller: "productController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
            $routeProvider.when("/home", { controller: "EmployeeController", templateUrl: "/EmployeePage.html" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    MyApp.Routes = Routes;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.Route.js.map