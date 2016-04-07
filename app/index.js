angular.module('myApp', ['ui.router', 'ngRoute', 'controllers', 'directives',
        'services', 'ngResource'])

    .config(function ($routeProvider, $locationProvider, $stateProvider, $httpProvider) {
        $stateProvider

            .state('home', {
                url: "/home",
                views: {
                    "viewA": {
                        templateUrl: "home.html",
                        controller: 'homeController'
                    },
                    "viewB": {
                        template: "adfa"
                    }
                }
            })

            .state('view', {
                url: "/view",
                views: {
                    "viewA": {
                        templateUrl: "view.html",
                        controller: 'viewController'
                    },
                    "viewB": {
                        template: "<a ui-sref='.list'>view.list</a><div ui-view></div>"
                    }
                }
            })

            .state('view.list', {
                url: "/list",
                template: "<p>home.list</p>"

            })

            .state('test', {
                url: "/test",
                views: {
                    "viewA": {
                        templateUrl: "test.html",
                        controller: 'testController'
                    },
                    "viewB": {
                        template: "route1.viewB"
                    }
                }

            })

            .state('database', {
                url: "/database",
                views: {
                    "viewA": {
                        templateUrl: "database.html",
                        controller: 'dbController'
                    },
                    "viewB": {
                        template: "route1.viewB"
                    }
                }

            })


        // $routeProvider.when('/', {
        // templateUrl : 'ad.html',
        // controller : 'adController'
        // })
        //
        // .when('/home/:name', {
        // templateUrl : 'home.html',
        // controller : 'homeController'
        // })
        //
        // .when('/view', {
        // templateUrl : 'view.html',
        // controller : 'viewController'
        // })
        //
        // .when('/edit', {
        // templateUrl : 'edit.html',
        // controller : 'editController'
        // })
        //
        // .when('/myModal', {
        // templateUrl : 'login.html',
        // controller : 'index'
        // });

        // $locationProvider.html5Mode(true);


        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
        // $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        // $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
        // $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
        // $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
        // $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        // $httpProvider.defaults.useXDomain = true;

    })