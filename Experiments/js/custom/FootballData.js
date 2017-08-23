$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Banning Orders '
        },
        subtitle: {
            text:'Banning orders per football club, as of September 2015'
        },
        xAxis: {
            categories: ['Newcastle United','Chelsea','West Ham United','Burnley','Liverpool','Manchester United','Sunderland','Tottenham Hotspur','Arsenal','Manchester City','Aston Villa','Crystal Palace','Everton','Leicester City','West Bromwich Albion','Hull City','Queens Park Rangers','Stoke City','Southampton','Swansea City']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Banning orders'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br />',
            pointFormat: '{series.name}: {point.y}<br/><b>Total:</b> {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                }
            }
        },
        series: [{
            name: 'New orders 2014/15',
            data: [13,12,13,26,23,11,8,7,8,3,11,0,5,3,4,3,7,4,1,4],
            color: '#ccece6'

        }, {
            name: 'Older orders',
            data: [119,67,54,28,30,38,31,30,28,32,20,31,20,21,17,16,12,15,16,11],
            color: '#006d2c'
        }]
    });
});