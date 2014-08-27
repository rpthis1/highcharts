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


    $scope.selectChange = function () {
        loadRemoteData($scope.selectedItem)

    }


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

    function loadRemoteData(data) {
        ReportService.getReport(data)
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

        angular.forEach(selections, function (selection) {
            selection.label = $sce.trustAsHtml(selection.label);
            dropDown.push(selection);

            if (selection.default) {
                $scope.selectedItem = selection;
            }
        })
        $scope.icons = dropDown;

        loadRemoteData($scope.selectedItem);
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
                color: 'rgba(255, 255, 255, 0.5)',
                y: 282847
            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 313052
            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 338867

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 313805

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 304192

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 312409

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 315329

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 304637

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 313686

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 294925

            },
            {
                name: 'Point 5',
                color: 'rgba(255, 255, 255, 0.5)',
                y: 314557

            }
        ], type: "column"},


        {"name": "Normalized", color: 'rgba(252,144,5,0.5)',  data: [
            {
                name: 'Point 1',
                color: 'rgba(252,144,5,0.5)',
                y: 319476
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 291352
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 323337
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 349617
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 330704
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 317561
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 331921
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 331877
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 320829
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 330749
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 314271
            },
            {
                name: 'Point 2',
                color: 'rgba(252,144,5,0.5)',
                y: 321391,
                yAxis: 2
            }
        ],
            type: "column"
        },


        {"name": "TMY3 Temperature", yAxis: 1, xAxis: 1,  color: '#FFFF00',  data: [
            {
                name: 'Point 5',
                color: '#FFFF00',
                y: 50
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
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 75
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 46
            } ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 56
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 78
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 45
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 67
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 78
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y:67
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 34
            } ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y:56
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y:78
            } ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y:67
            }



        ], type: "line"}


    ];


    $scope.chartConfig = {
        options: {
            chart: {

                backgroundColor: null,
                margin: 75,
                height: $window.innerHeight -200,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 0,
                    depth: 50,
                    viewDistance: 50
                },
                type: "column"
            },
            xAxis: [
                {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {

                        style: {
                            color: '#FFFFFF',
                            font: 'bold 12px "aurulent_sans_monoregular"'
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
            tooltip: {
                shared: true,
                crosshairs: true
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
            text: 'TMY3 Year',
            style: {
                color: '#CCCCCC',
                font: 'bold 20px "aurulent_sans_monoregular"'
            }
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
            $scope.chartConfig.options.chart.height = $window.innerHeight - 200 ;

            //  $scope.chartConfig.options.chart.height =  $element[0].clientHeight;
        };


        angular.element($window).bind("resize", function () {
            $scope.initializeWindowSize();
            $scope.$apply();
        });
        $scope.initializeWindowSize();
    }
});