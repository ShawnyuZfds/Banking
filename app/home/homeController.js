"use strict";
angular.module('homeController', []).controller('homeController', function ($scope, $rootScope) {

    $scope.list = [];
    $scope.enInput = true;
    var users = [{
        ID: "1",
        name: "visa",
        email: "***3432",
        phone: "-6231.3",
        account: "-6231.3"
    }, {
        ID: "2",
        name: "checking",
        email: "***7412",
        phone: "-6231.3",
        account: "-6231.3"
    }, {
        ID: "3",
        name: "saving",
        email: "***3332",
        phone: "-6231.3",
        account: "-6231.3"
    }, {
        ID: "4",
        name: "visa",
        email: "***1432",
        phone: "-6231.3",
        account: "-6231.3"
    }];

    $scope.choose = function (id) {
        $rootScope.id = id;
    };

    $scope.search = function () {
        $scope.list = [];
        if ($scope.select == "Full Name") {
            for (var i = 0; i < users.length; i++) {
                if ($scope.input == users[i].name) {
                    console.log(users[i]);
                    $scope.list.push(users[i]);
                }
            }
        } else if ($scope.select == "Phone number") {
            for (var j = 0; j < users.length; j++) {
                if ($scope.input == users[j].phone) {
                    console.log(users[j]);
                    $scope.list.push(users[j]);
                }
            }
        } else if ($scope.select == "Account number") {
            for (var k = 0; k < users.length; k++) {
                if ($scope.input == users[k].account) {
                    console.log(users[k]);
                    $scope.list.push(users[k]);
                }
            }
        }
        console.log("not selected!!");
        // if ($scope.list.length != "") {
        $scope.result = $scope.list.length + " result are found!!";
        // }
    };

    $scope.orderBy = function (x) {
        $scope.myOrder = x;
    };

    $scope.$watch('select', function () {
        $scope.enInput = true;
        $scope.enInput = !!($scope.select === null || $scope.select === "");
    });


});