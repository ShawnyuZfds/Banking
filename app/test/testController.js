"use strict";
angular.module('testController', ['services'])
    .controller('testController', function ($scope, $http, $resource, shang, $stateParams, $injector, $translate, $locale) {
        $scope.params = $stateParams;
        $scope.testServ = function () {
            shang('1');
        };
        $scope.testLocale = $locale.id;


        var testObj = {
            // "name": "ga", "age": "12", "sal": "34"
            "name": "dfa",
            "password": "dfag"
        };

        $scope.doSomething = function () {
            var s1 = $injector.get('s1');
            s1.value += 10;
        };
        $scope.value = function () {
            var s1 = $injector.get('s1');
            return s1.value;
        };
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };

    });