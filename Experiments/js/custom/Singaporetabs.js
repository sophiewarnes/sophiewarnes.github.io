    jQuery(document).ready(function () {

        // Build a chart
        jQuery('#primary').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Primary School fee increases'
            },
            subtitle: {
                text: 'Cost of primary school education, per month in Singapore $ (2015/16)'
            },
            xAxis: {
            categories: ['Singapore citizen','Permanent resident','IS(ASEAN)','International Student']
            },
                yAxis: {
            min: 0,
            title: {
                text: 'Cost of school'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: 'gray'
                }
            }
        },
            tooltip: {
                formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': $' + this.y
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: '2015',
                data: [0,90,350,500],
                stack: '2015',
                color: '#c6dbef'
            }, {
                name: '2016',
                data: [0,110,370,550],
                stack: '2016',
                color: '#3182bd'
            }]
        });

        // Build a chart
        jQuery('#secondary').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Secondary school fee increases'
            },
            subtitle: {
                text: 'Cost of secondary school education, per month in Singapore $ (2015/16)'
            },
            xAxis: {
            categories: ['Singapore citizen','Permanent resident','IS(ASEAN)','International Student']
            },
                yAxis: {
            min: 0,
            title: {
                text: 'Cost of school'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: 'gray'
                }
            }
        },
            tooltip: {
                formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': $' + this.y
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: '2015',
                data: [5,120,450,650],
                stack: '2015',
                color: '#fdd0a2'
            }, {
                name: '2016',
                data: [5,160,550,800],
                stack: '2016',
                color: '#e6550d'
            }]
        });

    jQuery('#university').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Pre-University school fee increases'
            },
            subtitle: {
                text: 'Cost of pre-university school education, per month in Singapore $ (2015/16)'
            },
            xAxis: {
            categories: ['Singapore citizen','Permanent resident','IS(ASEAN)','International Student']
            },
                yAxis: {
            min: 0,
            title: {
                text: 'Cost of school'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: 'gray'
                }
            }
        },
            tooltip: {
                formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': $' + this.y
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: '2015',
                data: [6,160,700,1000],
                stack: '2015',
                color: '#c7e9c0'
            }, {
                name: '2016',
                data: [6,220,800,1150],
                stack: '2016',
                color: '#31a354'
            }]
        });

		// fix dimensions of chart that was in a hidden element
		jQuery(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function (e) { // on tab selection event
		    jQuery( ".contains-chart" ).each(function() { // target each element with the .contains-chart class
		        var chart = jQuery(this).highcharts(); // target the chart itself
		        chart.reflow() // reflow that chart
		    });
		})

    });
