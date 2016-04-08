angular.module('controllers', [])
    // CONTROLLERS ============================================
    // home page controller
    .controller('index', function ($scope, $http, $interval, $timeout, shang) {
        $scope.submitting = false;
        $scope.errorMessage = false;
        $scope.retryMessage = false;
        $scope.login = function () {
            $("#myModal").modal();
        };
        $scope.testServ = function () {
            shang('1');
        };
        $scope.url = 'http://192.168.1.12:3000/users';
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
                            $scope.message = "Error!! retry after "
                                + retryTime + " sec...";
                        } else {
                            $scope.retryLink = true;
                            $interval.cancel(retry);
                        }
                    }, 1000);
                    $scope.retryMessage = true;

                });
        }
    })

    .controller('testController', function ($scope, $http, $resource) {
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
        }
        $scope.testPost = function () {
            console.log("sent");
            console.log(body);
            $http.post(req.url, JSON.stringify({"name": "dfa", "password": "dfag"})).then(function (res) {
                console.log(res);
            }, function (res) {

            })
            // var User = $resource('http://localhost:8002/json');
            // var user = new User();
            // user.name = 'Ari';
            // user.$save();

        }
    })

    .controller('homeController', function ($scope, $rootScope, $routeParams) {
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
        }

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
                for (var i = 0; i < users.length; i++) {
                    if ($scope.input == users[i].phone) {
                        console.log(users[i]);
                        $scope.list.push(users[i]);
                    }
                }
            } else if ($scope.select == "Account number") {
                for (var i = 0; i < users.length; i++) {
                    if ($scope.input == users[i].account) {
                        console.log(users[i]);
                        $scope.list.push(users[i]);
                    }
                }
            }
            console.log("not selected!!");
            // if ($scope.list.length != "") {
            $scope.result = $scope.list.length + " result are found!!";
            // }
        }

        $scope.orderBy = function (x) {
            $scope.myOrder = x;
        }

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
        }

        $scope.$watch('select', function () {
            $scope.enInput = true;
            if ($scope.select == null || $scope.select == "") {
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

    })

    .controller('viewController', function ($scope, $rootScope) {
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
        }]

        $scope.$watch('sel', function () {

            if ($scope.sel != null && $scope.sel != "") {
                $scope.bal = true;

                if (parseInt($scope.sel) < 0) {
                    $scope.text = "text-danger";
                } else
                    $scope.text = "text-success";
            }
        });

    })

    .controller('editController', function ($scope) {

    })

    .controller('dbController', function ($scope, $http) {
        var add = [];
        var del = [];
        var put = [];

        // $scope.crudUrl = "http://172.17.28.156:3000/"
        $scope.crudUrl = "http://192.168.1.8:3000/"
        $scope.people = [];
        $scope.enModify = [];
        $scope.en = [];
        $scope.orderBy = function (x) {
            $scope.myOrder = x;
            // console.log($scope.people['x']);
            // $scope.people = $scope.people.x.sort();
        }

        // Pagination in controller
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.numberOfPages = 1;
// Pagination buttons
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.numberOfPages - 1)
                $scope.currentPage++;
            else console.log("last page!");
        }
        $scope.prePage = function () {
            if ($scope.currentPage > 0)
                $scope.currentPage--;
            else console.log("first page!");
        }

        $scope.get = function () {
            console.log("get table");
            $scope.enModify = [];

            var req = {
                method: 'GET',
                // url: url + 'database/get',
                url: $scope.crudUrl + 'database/get',

                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // data: $scope.people
                // params: add
            };
            $http(req).then(
                function (response) {
                    console.log(response);
                    $scope.people = response.data;
                    var people = $scope.people;
                    $scope.numberOfPages = Math.ceil(people.length / $scope.pageSize);

                    // console.log(people[0]);
                    // for (var i = 0; i < response.data.length; i++) {
                    //     $scope.en.push({"index": i, "_id": response.data[i]._id});
                    // }
                    // console.log(people);
                    // for (x in  $scope.people) {
                    //     $scope.enModify[x] = true;
                    // }
                    add = [];
                    del = [];
                    put = [];
                },
                function (response) {
                    console.log(response);
                })

            console.log($scope.crudUrl);
        }

        $scope.add = function () {

            if ($scope.name != null && $scope.age != null && $scope.sal != null) {
                $scope.people.push({name: $scope.name, age: $scope.age, sal: $scope.sal});
                add.push({name: $scope.name, age: $scope.age, sal: $scope.sal});
                // add = {name: $scope.name, age: $scope.age, sal: $scope.sal};
                $scope.name = null;
                $scope.age = null;
                $scope.sal = null;
                // var json =
                // var json = {};
                // for (var i = 0; i < add.length; i++) {
                //     json[i] = add[i];
                // }
                // JSON.stringify(json);
                // console.log(json);
                // console.log(JSON.stringify(add));

                req = {
                    method: 'POST',
                    url: $scope.crudUrl + 'database/add',
                    data: add
                };

                $http(req).then(
                    function (response) {
                        console.log("added!");
                        console.log(response.data);
                        add = [];
                    },
                    function (response) {
                        console.log(response);
                    });
            }
        };

        $scope.del = function (x) {
            $scope.enModify = [];
            console.log(x);
            del.push(x._id);

            $scope.people.splice($scope.people.indexOf(x), 1);
            console.log(del);
            console.log("deleted!");
            req = {
                method: 'DELETE',
                url: $scope.crudUrl + 'database/del',
                params: del
            };

            $http(req).then(
                function (response) {
                    console.log(response.data);
                    del = [];
                },
                function (response) {
                    console.log(response);
                })


        };

        $scope.edit = function (k, v) {
            var index = $scope.people.indexOf(v);
            var req = {
                method: 'PUT',
                url: $scope.crudUrl + 'database/put',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                data: put
            };
            if ($scope.enModify[index] === true) {//save
                $scope.enModify[index] = false;
                put.push($scope.people[k]);
                console.log(put);

            } else {//modify
                $scope.enModify[index] = true;
            }
            $http(req).then(
                function (response) {
                    console.log("res:" + response.data);
                    console.log("saved!!");
                    put = [];
                },
                function (response) {
                    console.log(response);
                })
        }

        $scope.confirm = function () {


        }

    })
    
