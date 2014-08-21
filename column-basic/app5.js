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


    $scope.selectedIcon = "Camera";

    $scope.icons = [
        {"value": "Gear", "label": $sce.trustAsHtml("<i class=\"fa fa-gear\"></i> Gear")},
        {"value": "Globe", "label": $sce.trustAsHtml("<i class=\"fa fa-globe\"></i> Globe")},
        {"value": "Heart", "label": $sce.trustAsHtml("<i class=\"fa fa-heart\"></i> Heart")},
        {"value": "Camera", "label": $sce.trustAsHtml("<i class=\"fa fa-camera\"></i> Camera")}
    ];

    $scope.aside = {
        "title": "Title",
        "content": "hi"
    };

    $scope.modal = {
        "title": "Title",
        "content": "Hello Modal<br />This is a multiline message!"
    };

    $scope.dropdown = [
        {
            "text": $sce.trustAsHtml("<button type='button'>a</button>"),
            "href": "#anotherAction"
        },
        {
            "text": $sce.trustAsHtml("<i class=\"fa fa-globe\"></i>&nbsp;Display an alert"),
            "click": "$alert(\"Holy guacamole!\")"
        },
        {
            "text": $sce.trustAsHtml("<i class=\"fa fa-external-link\"></i>&nbsp;External link"),
            "href": "/auth/facebook",
            "target": "_self"
        },
        {
            "divider": true
        },
        {
            "text": $sce.trustAsHtml("Separated link"),
            "href": "#separatedLink"
        }
    ];


    $scope.chartTypes = [
        {"id": "line", "title": "Line"},
        {"id": "spline", "title": "Smooth line"},
        {"id": "area", "title": "Area"},
        {"id": "areaspline", "title": "Smooth area"},
        {"id": "column", "title": "Column"},
        {"id": "bar", "title": "Bar"},
        {"id": "pie", "title": "Pie"},
        {"id": "scatter", "title": "Scatter"}
    ];


    $scope.dashStyles = [
        {"id": "Solid", "title": "Solid"},
        {"id": "ShortDash", "title": "ShortDash"},
        {"id": "ShortDot", "title": "ShortDot"},
        {"id": "ShortDashDot", "title": "ShortDashDot"},
        {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
        {"id": "Dot", "title": "Dot"},
        {"id": "Dash", "title": "Dash"},
        {"id": "LongDash", "title": "LongDash"},
        {"id": "DashDot", "title": "DashDot"},
        {"id": "LongDashDot", "title": "LongDashDot"},
        {"id": "LongDashDotDot", "title": "LongDashDotDot"}
    ];

    $scope.loadRemoteData = function () {

        // The friendService returns a promise.
        ReportService.getReport()
            .then(
            function (friends) {
                $scope.reset(friends);
                console.log(friends);
            }
        )
        ;

    }

    $scope.reset = function (data) {
        $scope.chartConfig.series = data;
    }


    $scope.loadRemoteData();

//    $scope.chartSeries = [
//
//        {"name": "TMY3 Temperature",     data: [50,60,80], type: "line", yAxis: 1 },
//
//
//
//        {"name": "Baseline",    data: [6,7,8]  , type: "column"},
//
//
//
//
//
//
//        {"name": "Normalized",   data: [3,4,5],
//            type: "column"
//        }
//    ];


    $scope.chartSeries = [


        {"name": "Baseline", data: [
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 313706,
                events: {click: function () {
                    console.log("column click drill")
                }}

            },
            {
                name: 'Point 2',
                color: '#CCCCCC',
                y: 282847
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 313052
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 338867

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 313805

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 304192

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 312409

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 315329

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 304637

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 313686

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 294925

            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 314557

            }
        ], type: "column"},


        {"name": "Normalized", data: [
            {
                name: 'Point 1',
                color: 'rgba(252,144,5,0.5)',
                y: 319476
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 291352
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 323337
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 349617
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 330704
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 317561
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 331921
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 331877
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 320829
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 330749
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 314271
            },
            {
                name: 'Point 2',
                color: '#FC9005',
                y: 321391,
                yAxis: 2
            }
        ],
            type: "column"
        },


        {"name": "TMY3 Temperature", yAxis: 1, xAxis: 1, data: [
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 50,
                yAxis: 2
            },
            {
                name: 'Point 2',
                color: '#CCCCCC',
                y: 52
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 54
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 55
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 60
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 78
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 56
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 65
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 78
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 81
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 82
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 83
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 99
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 100
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 101
            }
        ], type: "line"}


    ];

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