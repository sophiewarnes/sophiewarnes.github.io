$(function () {
    $('#internships').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'London Internship Salaries'
        },
        subtitle: {
            text:'Salaries for internships at national outlets in London'
        },
        xAxis: {
            categories: ['The Economist Internship Schemes (JA)','ESPN Editorial Internship (JA)','The Telegraph Magazine Internship (JA)','The Financial Times (SB)','Time Inc Internship','Longitude Editorial Intern (SB)','Internship, National Tabloid']
            title: {
                text: '(JA) = Job advert. (SB) = Submitted by member. * = based on hourly wage.'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Salary (£)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            headerFormat: '<b>£{point.x}</b><br />',
            pointFormat: 'Date recorded: {point.DateAdded}'
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
            name: 'Internships',
            data: [
            {
                y : 24000,
                DateAdded : '2018'
            },
            {
                y : 18000,
                DateAdded : '2018'
            },
            {
                y: 18460,
                DateAdded : '2018'
            },
            {
                y: 18564,
                DateAdded : '2018'
            },
            {
                y: 15000,
                DateAdded : '2018'
            },
            {
                y: 15000,
                DateAdded : '2018'
            },
            {
                y: 14000,
                DateAdded : '2018'
            }
            ],
            color: '#63c6ae'

        },
        credits: {
        enabled: false
    }]
    });
});
