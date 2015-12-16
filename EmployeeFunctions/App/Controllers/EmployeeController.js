/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
var Employee = (function () {
    function Employee() {
    }
    return Employee;
})();
var MyApp;
(function (MyApp) {
    var controllers;
    (function (controllers) {
        //export interface IEmployeeCheck
        //{
        //    AddEmployee: () => void;
        //}
        var EmployeeController = (function () {
            function EmployeeController($http, $scope) {
                this.httpService = $http;
                $scope.AddEmployee = function () {
                    var empObj = new Employee();
                    empObj.EmployeeID = $scope.EmployeeID;
                    empObj.Name = $scope.Name;
                    empObj.Dept = $scope.Dept;
                    // document.body.innerHTML = "insert into Add Prod";
                    //this.httpService.post('/api/Employee', empObj);
                    $http.post('/api/Employee', empObj).success(function () { $scope.Message = "Employee Added"; });
                };
                $scope.DeleteEmployee = function () {
                    var ID = $scope.EmployeeID;
                    $http.delete('/api/Employee/' + ID).success(function () { $scope.Message = "Deleted Employee"; });
                };
                $scope.GetEmployee = function () {
                    var ID = $scope.EmployeeID;
                    $http.get('/api/Employee/' + ID).success(function (data) {
                        $scope.Name = data.Name;
                        $scope.Dept = data.Dept;
                    });
                };
                $scope.GetAllEmployee = function () {
                    $http.get('/api/Employee').success(function (data) { $scope.EmployeeList = data; });
                };
            }
            EmployeeController.$inject = ['$http', '$scope'];
            return EmployeeController;
        })();
        controllers.EmployeeController = EmployeeController;
        angular.module("MyApp").controller("EmployeeController", EmployeeController);
    })(controllers = MyApp.controllers || (MyApp.controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=EmployeeController.js.map