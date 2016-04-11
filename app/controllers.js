"use strict";
angular.module('controllers', ['editController', 'dbController', 'viewController', 'homeController', 'testController'])
    // CONTROLLERS ============================================
    // home page controller
    .controller('index', function ($scope, $http, $interval, $timeout) {
        $scope.submitting = false;
        $scope.errorMessage = false;
        $scope.retryMessage = false;
        $scope.login = function () {
            $("#myModal").modal();
        };

        $scope.url = 'http://192.168.1.9:3000/users';
        // $scope.testServ1 = shang.myFun(1);
        $scope.submit = function () {
            // var data = JSON.stringify({
            // username : $scope.userName,
            // passwd : $scope.passWord
            // });

            var req = {
                method: 'GET',
                url: $scope.url,
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    username: $scope.userName,
                    passwd: $scope.passWord
                }
                // data : {
                // username : $scope.userName,
                // passwd : $scope.passWord
                // },
            };

            console.log($scope.userName + " " + $scope.userName);
            console.log("submitting to " + req.url);
            $scope.message = "submitting...";
            // $scope.errorMessage = false;
            // $scope.retryMessage = false;
            $scope.retryLink = false;
            var retryTime = 5;
            $http(req).then(
                function (response) {
                    // $http.post('server.jsp',
                    // data).then(function(response) {
                    $scope.message = "login success!!";
                    $timeout(function () {
                        $("#myModal").modal("hide");
                    }, 1000);
                    // var res = response.data;
                    console.log(response.data);
                },
                function (response) {
                    // $scope.submitting = false;
                    // $scope.errorMessage = true;
                    // $scope.retryMessage = true;

                    var retry = $interval(function () {
                        if (retryTime > 0) {
                            retryTime--;
                            $scope.message = "Error!! retry after " + retryTime + " sec...";
                        } else {
                            $scope.retryLink = true;
                            $interval.cancel(retry);
                        }
                    }, 1000);
                    $scope.retryMessage = true;

                });
        };
    });