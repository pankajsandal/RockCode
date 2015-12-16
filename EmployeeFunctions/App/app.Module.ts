/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
((): void=> {
    var app = angular.module("MyApp", ['ngRoute']);
    app.config(MyApp.Routes.configureRoutes);
})() 