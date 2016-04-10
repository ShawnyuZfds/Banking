'use strict';
angular.module('filters', [])

    .filter('startFrom', function () {
        return function (input, start) {
            return input.slice(start);
        };
    });