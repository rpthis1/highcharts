'use strict';

var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope) {

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

  $scope.chartSeries = [

    {"name": "TMY3 Temperature",     data: [{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 50,
        yAxis: 2
    }, {
        name: 'Point 2',
        color: '#CCCCCC',
        y: 52
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 54
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 55
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 60
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 78
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 56
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 65
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 78
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 81
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 82
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 83
    }] , type: "line"},



    {"name": "Baseline",    data: [{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 313706

    }, {
        name: 'Point 2',
        color: '#CCCCCC',
        y: 282847
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 313052
    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 338867

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 313805

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 304192

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 312409

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 315329

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 304637

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 313686

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 294925

    },{
        name: 'Point 5',
        color: '#CCCCCC',
        y: 314557

    }]  , type: "column"},






    {"name": "Normalized",   data: [{
        name: 'Point 1',
        color: '#FC9005',
        y: 319476
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 291352
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 323337
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 349617
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 330704
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 317561
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 331921
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 331877
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 320829
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 330749
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 314271
    }, {
        name: 'Point 2',
        color: '#FC9005',
        y: 321391,
        yAxis: 2
    }],
        type: "column"
        }
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
          zoomType: 'xy'
      },
       xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

       }],

        yAxis: [{ // Primary yAxis
            labels: {


            },
            title: {
                text: 'Usage (kWh)'
            }


        }, { // Secondary yAxis
            title: {
                text: 'Temperature'

            },
            labels: {
                format: '{value} °F'

            },
            opposite: true

        }],








      plotOptions: {
        series: {
          stacking: ''
        }
      }
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
    $scope.$broadcast('highchartsng.reflow');
  };


});