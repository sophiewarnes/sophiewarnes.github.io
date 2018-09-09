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
            name: 'Internships',
            data: [24000,18000,18460,18564,15000,15000,14000],
            color: '#63c6ae'
        }],
        credits: {
        enabled: false
        }
    });
});
