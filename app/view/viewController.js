"use strict";
angular.module('viewController', []).controller('viewController', function ($scope, $rootScope) {
    $scope.bal = false;
    $scope.text = "";
    $scope.test = $rootScope.id;
    $scope.records = [{
        "ID": "1",
        "type": "visa",
        "num": "***3432",
        "balance": "-6231.3"
    }, {
        "ID": "2",
        "type": "checking",
        "num": "***7412",
        "balance": "1231.3"
    }, {
        "ID": "3",
        "type": "saving",
        "num": "***3332",
        "balance": "5421.3"
    }, {
        "ID": "4",
        "type": "visa",
        "num": "***1432",
        "balance": "-9231.3"
    }];

    $scope.$watch('sel', function () {

        if ($scope.sel !== null && $scope.sel !== "") {
            $scope.bal = true;

            if (parseInt($scope.sel) < 0) {
                $scope.text = "text-danger";
            } else
                $scope.text = "text-success";
        }
    });

});