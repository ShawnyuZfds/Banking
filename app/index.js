angular
    .module(
        'myApp', ['ui.router', 'ngRoute', 'controllers', 'directives',
            'services'])

    .config(function ($routeProvider, $locationProvider, $stateProvider) {
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

            .state(
                'view',
                {
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
                }).state('view.list', {
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
    })