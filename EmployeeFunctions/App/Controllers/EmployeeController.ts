/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />


class Employee
{
    Name: string;
    EmployeeID: number;
    Dept: string;
}

module MyApp.controllers
{
    //export interface IEmployeeCheck
    //{
    //    AddEmployee: () => void;
    //}

    export class EmployeeController
    {
        httpService : ng.IHttpService;
        static $inject = ['$http','$scope'];       
        constructor($http,$scope)
        {
            this.httpService = $http;
            $scope.AddEmployee = function():void            
            {
                var empObj = new Employee();
                empObj.EmployeeID = $scope.EmployeeID;
                empObj.Name = $scope.Name;
                empObj.Dept = $scope.Dept;
               // document.body.innerHTML = "insert into Add Prod";
                //this.httpService.post('/api/Employee', empObj);
                $http.post('/api/Employee', empObj).success(function () { $scope.Message = "Employee Added" });
                
            }


            $scope.DeleteEmployee = function (): any
            {
                var ID: number = $scope.EmployeeID;
                $http.delete('/api/Employee/' + ID).success(function() { $scope.Message = "Deleted Employee"});
               
            }

            $scope.GetEmployee = function (): void
            {
                var ID: number = $scope.EmployeeID;
                $http.get('/api/Employee/' + ID).success(function (data) {
                    $scope.Name = data.Name;
                    $scope.Dept = data.Dept;
                });
            }

            $scope.GetAllEmployee = function ():void
            {
                $http.get('/api/Employee').success(function (data) { $scope.EmployeeList = data });               
            }
        }

    }

    angular.module("MyApp").controller("EmployeeController", EmployeeController);
   
}


