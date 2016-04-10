"use strict";
angular.module('testController', []).controller('testController', function ($scope, $http, $resource) {
    var testObj = {
        // "name": "ga", "age": "12", "sal": "34"
        "name": "dfa",
        "password": "dfag"
    };
    var body = JSON.stringify(testObj);

    var req = {
        // async: true,
        // crossDomain: true,
        url: 'http://192.168.1.5:8080/SpringAngular/rest/accounts/',
        // url: 'http://192.168.1.12:3000/database/test',
        method: 'post',
        // headers: {
        //     "content-Type": "application/json",
        //     // "content-Type": "application/x-www-form-urlencoded",
        //     // "cache-control": "no-cache"
        // },
        // processDate: false,
        // data: JSON.stringify(testObj),
        // data: {
        //     "name": "dfa",
        //     "password": "dfag"
        // },
        // json: true,
        //
    };
    $scope.testPost = function () {
        console.log("sent");
        console.log(body);
        $http.post(req.url, JSON.stringify({"name": "dfa", "password": "dfag"})).then(function (res) {
            console.log(res);
        }, function (res) {

        });
        // var User = $resource('http://localhost:8002/json');
        // var user = new User();
        // user.name = 'Ari';
        // user.$save();

    };
});