"use strict";
angular.module('testController', ['services']).controller('testController', function ($scope, $http, $resource, shang, $routeParams) {
    $scope.params = $routeParams;
    $scope.testServ = function () {
        shang('1');
    };

    var testObj = {
        // "name": "ga", "age": "12", "sal": "34"
        "name": "dfa",
        "password": "dfag"
    };
    var body = JSON.stringify(testObj);

    var req = {
        url: 'http://192.168.1.5:8080/SpringAngular/rest/accounts/',
        // url: 'http://192.168.1.12:3000/database/test',
        method: 'post',
    };
    $scope.testPost = function () {
        console.log("sent");
        console.log(body);
        $http.post(req.url, JSON.stringify({"name": "dfa", "password": "dfag"})).then(function (res) {
            console.log(res);
        }, function (res) {

        });

    };
});