"use strict";
angular.module('directives', []).directive('shangYu', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope, $element, $attrs) {
                this.wang = function () {
                    return 'yu';
                };
                $scope.name = $attrs.name;
                $scope.age = $attrs.age;
                $element.css({
                    color: 'red',
                    textAlign: 'center'
                });
                // // $scope.qiu = $transclude;

                // link : function(s, e, a) {
                // s.name = a.name;
                // s.age = a.age;
                // e.css({
                // color : 'red',
                // textAlign : 'center'
                // });
                // // e.html("'<p>123'+s.name+s.age+'</p>'");
            },
            template: '<p>name:{{name}} age:{{age}}<div><div ng-transclude></div>'
//						templateUrl : 'ad.html'
            // ng-transclude></div>',
        };
    })

    .directive('qiuShi', function () {
        return {
            // transclude : true,
            scope: {},
            restrict: 'AE',
            // require : 'moJie',
            link: function (s, e, a, c) {
                s.num = a.num;
                s.name = "qiu";
                s.test = c.wang();

            },
            controller: function ($scope, $element, $attrs) {
                this.wang = function () {
                    return 'wang';
                };
            },
            template: '<div><div><span>Hello {{name}}{{num}}{{test}}</span></div></div>'

        };
    })

    .directive('moJie', function () {
        return {
            // transclude : true,
            controller: function ($scope, $element, $attrs) {
                this.wang = function () {
                    return 'yao';
                };
            },
            scope: {},
            restrict: 'AE',
            require: '^moJie',
            link: function (s, e, a, c) {
                s.num = a.num;
                s.name = 'mo';
                s.test = c.wang();
            },
            template: '<div><div><span>Hello {{name}}{{num}}{{test}}</span></div></div>'

        };
    })

    .directive('login', function () {
        return {
            restrict: 'E',
            transclude: true,
            link: function (s, e, a) {
                e.css({
                    backgroundColor: 'yellow',
                    position: 'absolute',
                    right: '2%',
                    top: '25%',
                    padding: '5px'
                });
                e.on("mouseover", function () {
                    e.css({
                        backgroundColor: 'red',
                        cursor: 'pointer'
                    });
                });
                e.on("mouseleave", function () {
                    e.css({
                        backgroundColor: 'yellow',
                        // position: 'absolute',
                        // right: '2%',
                        // top: '25%',
                        // padding: '5px'
                    });
                });

            },
            template: '<a href="#">login</a> '
        };
    })

    .directive('myTabs', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: ['$scope', function ($scope) {
                var panes = $scope.panes = [];

                $scope.select = function (pane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            }],
            templateUrl: 'test/my-tabs.html'
        };
    })

    .directive('myPane', function () {
        return {
            require: '^^myTabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function (scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            templateUrl: 'test/my-pane.html'
        };
    })

    .directive('dbTable', function () {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {
                // itemKey: '@',
                // itemVal: '@'
            },
            link: function (s, e, a) {
                s.itemKey = a.itemKey;
                s.itemVal = a.itemVal;
                alert(a.itemKey);
            },
            templateUrl: 'database/template_tableItem.html'
        };
    })

    .directive('collapseDiv', function () {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {
                name: '@'
            },
            link: function (s, e, a) {
            },
            templateUrl: 'test/collapseDiv.html'
        };
    });