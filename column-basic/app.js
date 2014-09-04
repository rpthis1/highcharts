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


        {"name": "Baseline", color: 'rgba(204,204,204,0.5)', data: [
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


        {"name": "Normalized", color: 'rgba(252,144,5,1)', data: [
            {
                name: 'Point 1',
                color: {
                    linearGradient: { x1: 2, x2: 0, y1: 0, y2: 1 },
                    stops:[
                        [0, 'rgba(252,144,5,0.5)'],
                        [1, 'rgba(51,102,107,0.5)'],
                        [2, 'rgba(51,102,0,0.5)']
                    ]
                },
                y: 319476
            },
            {
                name: 'Point 2',
                color: {
                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                    stops:[
                        [0, 'rgba(252,144,5,0.5)'],
                    [1, 'rgba(51,102,107,0.5)']
        ]
        },
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


        {"name": "TMY3 Temperature",shadow : true, yAxis: 1, xAxis: 1, color: '#FFCC00', data: [
            {
                name: 'Point 5',
                color: '#FFFF00',
                y: 65
            },
            {
                name: 'Point 2',
                color: '#CCCCCC',
                y: 62
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 6
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 75
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 67
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 70
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
                y: 74
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 72
            },
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 73
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 79
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 70
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 71
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
                y: 76
            } ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 66
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 68
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 65
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
                y: 67
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 64
            } ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 66
            }
            ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 68
            } ,
            {
                name: 'Point 5',
                color: '#CCCCCC',
                y: 67
            }


        ], type: "line"}


    ];


    var ranges = [
            [1246406400000, 14.3, 27.7],
            [1246492800000, 14.5, 27.8],
            [1246579200000, 15.5, 29.6],
            [1246665600000, 16.7, 30.7],
            [1246752000000, 16.5, 25.0],
            [1246838400000, 17.8, 25.7],
            [1246924800000, 13.5, 24.8],
            [1247011200000, 10.5, 21.4],
            [1247097600000, 9.2, 23.8],
            [1247184000000, 11.6, 21.8],
            [1247270400000, 10.7, 23.7],
            [1247356800000, 11.0, 23.3],
            [1247443200000, 11.6, 23.7],
            [1247529600000, 11.8, 20.7],
            [1247616000000, 12.6, 22.4],
            [1247702400000, 13.6, 19.6],
            [1247788800000, 11.4, 22.6],
            [1247875200000, 13.2, 25.0],
            [1247961600000, 14.2, 21.6],
            [1248048000000, 13.1, 17.1],
            [1248134400000, 12.2, 15.5],
            [1248220800000, 12.0, 20.8],
            [1248307200000, 12.0, 17.1],
            [1248393600000, 12.7, 18.3],
            [1248480000000, 12.4, 19.4],
            [1248566400000, 12.6, 19.9],
            [1248652800000, 11.9, 20.2],
            [1248739200000, 11.0, 19.3],
            [1248825600000, 10.8, 17.8],
            [1248912000000, 11.8, 18.5],
            [1248998400000, 10.8, 16.1]
        ],
        averages = [
            [1246406400000, 21.5],
            [1246492800000, 22.1],
            [1246579200000, 23],
            [1246665600000, 23.8],
            [1246752000000, 21.4],
            [1246838400000, 21.3],
            [1246924800000, 18.3],
            [1247011200000, 15.4],
            [1247097600000, 16.4],
            [1247184000000, 17.7],
            [1247270400000, 17.5],
            [1247356800000, 17.6],
            [1247443200000, 17.7],
            [1247529600000, 16.8],
            [1247616000000, 17.7],
            [1247702400000, 16.3],
            [1247788800000, 17.8],
            [1247875200000, 18.1],
            [1247961600000, 17.2],
            [1248048000000, 14.4],
            [1248134400000, 13.7],
            [1248220800000, 15.7],
            [1248307200000, 14.6],
            [1248393600000, 15.3],
            [1248480000000, 15.3],
            [1248566400000, 15.8],
            [1248652800000, 15.2],
            [1248739200000, 14.8],
            [1248825600000, 14.4],
            [1248912000000, 15],
            [1248998400000, 13.6]
        ];

    $scope.chartConfig2 =
    {
        options: {
            chart: {

                backgroundColor: null,

                margin: 80,
                height: 600,
                width: 1000,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 5,
                    depth: 50,
                    viewDistance: 50
                },
                type: "column"
            },
            xAxis: [
                {
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {

                        style: {
                            color: '#FFFFFF',
                            font: 'bold 12px "aurulent_sans_monoregular"'
                        }
                    }
                },
                {
                    categories: ['', '', '', '', '', '', '', '', '', '', '', '', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
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
                    },
                    gridLineWidth: 0,
                    minorGridLineWidth: 0


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
                        format: '{value} F'
                    },
                    opposite: true

                }
            ],

            legend: {
                enabled: true,
                borderRadius: 5,
                borderColor: "#CCCCCC",
                borderWidth: 3,
                backgroundColor: "#2a2a2a",
                itemStyle: { "color": "#FFFFFF", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold" }
            },
            tooltip: {

                crosshairs: false,
                shared: true

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


    $scope.reflow = function () {

        console.log("resized");
        $scope.$broadcast('highchartsng.reflow');
    };


    $scope.chartConfig =
    {
        options: {
            chart: {
                shadow: true,

                backgroundColor: null,

                margin: 80,

                options3d: {
                    enabled: false,
                    alpha: 5,
                    beta: 0,
                    depth: 50,
                    viewDistance: 50,
                    frame: {
                        side: {
                            color: "#CCCCCC"
                        },
                        bottom: {
                            color: "#CCCCCC"
                        },
                        back: {
                            color: "#CCCCCC"
                        }
                    }
                },
                type: "column"
            },
            xAxis: [
                {
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    labels: {

                        style: {
                            color: '#FFFFFF',
                            font: 'bold 12px "aurulent_sans_monoregular"'
                        }
                    }
                },
                {
                    categories: ['', '', '', '', '', '', '', '', '', '', '', '', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
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
                    },
                    gridLineWidth: 0,
                    minorGridLineWidth: 0


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
                        format: '{value} F'
                    },
                    opposite: true

                }
            ],

            legend: {
                enabled: true,
                borderRadius: 5,
                borderColor: "#CCCCCC",
                borderWidth: 3,
                backgroundColor: "#2a2a2a",
                itemStyle: { "color": "#FFFFFF", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold" }
            },
            tooltip: {

                crosshairs: false,
                shared: true

            },

            plotOptions: {
                series: {
                    stacking: '',
                    shadow:true
                },
                column: {
                    depth: 25,
                    borderColor: "#FFFFFF",
                    borderWidth: 10
                },
                bar: {
                    borderRadius: 10
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
            $scope.chartConfig.options.chart.height = $window.innerHeight - 200;

            //  $scope.chartConfig.options.chart.height =  $element[0].clientHeight;
        };


        angular.element($window).bind("resize", function () {
            $scope.initializeWindowSize();
            $scope.$apply();
        });
        $scope.initializeWindowSize();
    }
});