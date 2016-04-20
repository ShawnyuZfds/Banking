"use strict";
angular.module('dbController', [])
    .controller('dbController', function ($scope, $http, $filter) {
        var add = [];
        var del = [];
        var put = [];

        // $scope.crudUrl = "http://172.17.28.156:3000/"
        $scope.crudUrl = "http://192.168.1.6:3000/";
        $scope.people = [];
        $scope.enModify = [];
        $scope.en = [];
        $scope.orderBy = function (x) {
            // $scope.myOrder = x;
            var modBool = false;
            for (x in $scope.enModify) {
                modBool = $scope.enModify[x] | modBool;
            }
            if (!modBool) {
                $scope.people = $filter('orderBy')($scope.people, x);
            }

            // console.log($scope.people['x']);
            // $scope.people = $scope.people.x.sort();
        };

        // Pagination in controller
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.numberOfPages = 1;
// Pagination buttons
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.numberOfPages - 1)
                $scope.currentPage++;
            else console.log("last page!");
        };
        $scope.prePage = function () {
            if ($scope.currentPage > 0)
                $scope.currentPage--;
            else console.log("first page!");
        };
        $scope.get = function () {
            console.log("get table");
            $scope.enModify = [];
            $scope.people = [];
            var req = {
                method: 'GET',
                // url: url + 'database/get',
                url: $scope.crudUrl + 'database',

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
                });

            console.log($scope.crudUrl);
        };
        $scope.add = function () {

            if ($scope.name !== null && $scope.age !== null && $scope.sal !== null) {
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

                var req = {
                    method: 'POST',
                    url: $scope.crudUrl + 'database',
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
            var req = {
                method: 'DELETE',
                url: $scope.crudUrl + 'database',
                params: del
            };

            $http(req).then(
                function (response) {
                    console.log(response.data);
                    del = [];
                },
                function (response) {
                    console.log(response);
                });


        };

        $scope.edit = function (k, v) {
            var index = $scope.people.indexOf(v);
            var req = {
                method: 'PUT',
                url: $scope.crudUrl + 'database',
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
                });
        };

        $scope.confirm = function () {


        };

    });
// .animation('.fade', function () {
//     return {
//         enter: function (element, done) {
//             element.css('display', 'none');
//             $(element).fadeIn(1000, function () {
//                 done();
//             });
//         },
//         leave: function (element, done) {
//             $(element).fadeOut(1000, function () {
//                 done();
//             });
//         },
//         move: function (element, done) {
//             element.css('display', 'none');
//             $(element).slideDown(500, function () {
//                 done();
//             });
//         }
//     }
// })