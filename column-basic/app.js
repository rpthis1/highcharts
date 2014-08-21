'use strict';

var myapp = angular.module('myapp', ["highcharts-ng", "guthub.services", "mgcrea.ngStrap", "ngAnimate"]);


myapp.config(function ($modalProvider) {
    angular.extend($modalProvider.defaults, {
        html: true
    });
})


myapp.config(function ($dropdownProvider) {
    angular.extend($dropdownProvider.defaults, {
        animation: 'am-flip-x',
        html: true
    });
})

myapp.config(function ($asideProvider) {
    angular.extend($asideProvider.defaults, {
        container: 'body',
        html: false
    });
})

myapp.controller('myctrl', ['$scope', '$window', 'ReportService', "$sce", function ($scope, $window, ReportService, $sce) {
    $scope.aside = {
        "title": "Title",
        "content": "hi"
    };

    $scope.modal = {
        "title": "Title",
        "content": "Hello Modal<br />This is a multiline message!"
    };


    init();


    function init() {
        loadSelections();
    }

    function loadSelections() {
        ReportService.getSelections()
            .then(
            function (selections) {
                applySelections(selections);
            }
        )
    }

    function loadRemoteData() {
        ReportService.getReport()
            .then(
            function (report) {
                resetData(report);
            }
        )
    }

    function resetData(data) {
        $scope.chartConfig.series = data;
    }

    function applySelections(selections) {
//
//       {
//           "BaselineStartDate": "7/10/2012",
//           "BaselineEndDate": "7/15/2012",
//           "ReportingStartDate": "9/1/2012",
//           "ReportingEndDate": "12/1/2012",
//           "leftLabel": "Baseline",
//           "rightLabel": "Reporting",
//           "label": "New Chiller ECM (7/15/12 - 9/1/12)",
//           "reportProvider": "Ipmvp Normalized Delta OAT Report",
//           "parentEntities": "1",
//           "default": true
//       }

        var dropDown = [];
        var obj;
        angular.forEach(selections, function (selection) {
            obj = {};
            obj.value = selection.label;
            obj.label = $sce.trustAsHtml(selection.label);
            dropDown.push(obj);

            if (selection.default) {
                $scope.selectedIcon = selection.label;
            }
        })
        $scope.icons = dropDown;

        loadRemoteData();
    }


    $scope.chartStack = [
        {"id": '', "title": "No"},
        {"id": "normal", "title": "Normal"},
        {"id": "percent", "title": "Percent"}
    ];

    $scope.addPoints = function () {
        var seriesArray = $scope.chartConfig.series;
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.chartConfig.series.push({
            data: rnd
        })
    }

    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.chartConfig.series;
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.removeSeries = function (id) {
        var seriesArray = $scope.chartConfig.series;
        seriesArray.splice(id, 1)
    }

    $scope.toggleHighCharts = function () {
        this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
    }

    $scope.replaceAllSeries = function () {
        var data = [
            { name: "first", data: [10] },
            { name: "second", data: [3] },
            { name: "third", data: [13] }
        ];
        $scope.chartConfig.series = data;
    };

    $scope.chartConfig = {
        options: {
            chart: {
                backgroundColor: null,
                margin: 75,
                height: $window.innerHeight - 350,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50,
                    viewDistance: 25
                },
                type: "column"
            },
            xAxis: [
                {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {   style: {
                        color: '#FFFFFF'
                    }
                    }
                },
                {
                    categories: ['', '', '', '', '', '', '', '', '', '', '', '', "", "", ""],
                    tickWidth: 0,
                    lineWidth: 0

                }
            ],

            yAxis: [
                { // Primary yAxis
                    labels: {   style: {
                        color: '#FFFFFF'
                    }
                    },
                    title: {
                        text: 'Usage (kWh)',
                        style: {
                            color: '#FFFFFF'
                        }
                    }


                },
                { // Secondary yAxis
                    title: {
                        text: 'Temperature',
                        style: {
                            color: '#FFFFFF'
                        }

                    },

                    labels: {   style: {
                        color: '#FFFFFF'
                    },
                        format: '{value}F'
                    },
                    opposite: true

                }
            ],

            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    stacking: ''
                },
                column: {
                    depth: 25
                }

            }
        },
        exporting: {
            enabled: true
        },
        series: $scope.chartSeries,
        title: {
            text: 'TMY3 Year'
        },
        credits: {
            enabled: false
        },
        loading: false,
        size: {}
    }

    $scope.reflow = function () {

        console.log("resized");
        $scope.$broadcast('highchartsng.reflow');
    };


}]);

myapp.directive('resizable', function ($window) {
    return function ($scope, $element) {

        $scope.initializeWindowSize = function () {

            //    console.log("Div Height: " + $element[0].clientHeight);
            $scope.chartConfig.options.chart.height = $window.innerHeight - 350;

            //  $scope.chartConfig.options.chart.height =  $element[0].clientHeight;
        };


        angular.element($window).bind("resize", function () {
            $scope.initializeWindowSize();
            $scope.$apply();
        });
        $scope.initializeWindowSize();
    }
});