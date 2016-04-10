"use strict";
angular.module('testController', ['services']).controller('testController', function ($scope, $http, $resource, shang, $stateParams) {
    $scope.params = $stateParams;
    $scope.testServ = function () {
        shang('1');
    };

    var testObj = {
        // "name": "ga", "age": "12", "sal": "34"
        "name": "dfa",
        "password": "dfag"
    };

});