"use strict";
angular.module('homeController', []).controller('homeController', function ($scope, $rootScope, $routeParams) {
    $scope.params = $routeParams;
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

    $scope.submit = function () {
        $http.post('/someUrl', $rootScope.id).then(
            function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                alert("success!!" + response.data);

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("failed!!");
            });
    };

    $scope.$watch('select', function () {
        $scope.enInput = true;
        if ($scope.select === null || $scope.select === "") {
            $scope.enInput = true;
        } else {
            $scope.enInput = false;
        }
    });

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2014-11-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [{
            title: 'All Day Event',
            start: '2014-11-01'
        }, {
            title: 'Long Event',
            start: '2014-11-07',
            end: '2014-11-10'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: '2014-11-09T16:00:00'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: '2014-11-16T16:00:00'
        }, {
            title: 'Conference',
            start: '2014-11-11',
            end: '2014-11-13'
        }, {
            title: 'Meeting',
            start: '2014-11-12T10:30:00',
            end: '2014-11-12T12:30:00'
        }, {
            title: 'Lunch',
            start: '2014-11-12T12:00:00'
        }, {
            title: 'Meeting',
            start: '2014-11-12T14:30:00'
        }, {
            title: 'Happy Hour',
            start: '2014-11-12T17:30:00'
        }, {
            title: 'Dinner',
            start: '2014-11-12T20:00:00'
        }, {
            title: 'Birthday Party',
            start: '2014-11-13T07:00:00'
        }, {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2014-11-28'
        }]
    });

});