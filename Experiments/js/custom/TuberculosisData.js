$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "gb-eng",
            "value": 40538,
            "2011": 8418,
            "2010" : 7862,
            "2009" : 8423,
            "2008" : 7998,
            "2007" : 7837
        },
        {
            "hc-key": "gb-wls",
            "value": 862,
            "2011": 132,
            "2010" : 150,
            "2009" : 220,
            "2008" : 167,
            "2007" : 193
        },
        {
            "hc-key": "gb-sct",
            "value": 2260,
            "2011": 429,
            "2010" : 507,
            "2009" : 468,
            "2008" : 455,
            "2007" : 401
        },
        {
            "hc-key": "gb-nir",
            "value":295,
            "2011": 63,
            "2010" : 68,
            "2009" : 42,
            "2008" : 59,
            "2007" : 63
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Tuberculosis on the rise?'
        },

        subtitle : {
            text : 'Number of provisional TB cases in each region, 2007-2011'
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        legend: {
            enabled:false
        },
        tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 0,
                pointFormat:
                    '<b>{point.name}</b>:<br /><b>2007:</b> {point.2007:,.0f}<br /><b>2008:</b> {point.2008:,.0f}<br /><b>2009:</b> {point.2009:,.0f}<br /><b>2010:</b> {point.2010:,.0f}<br /><b>2011:</b> {point.2011:,.0f}',
                positioner: function () {
                    return { x: 0, y: 250 };
                }
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            maxColor: '#F39C12'
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['custom/british-isles'],
            joinBy: 'hc-key',
            name: 'TB Cases',
            states: {
                hover: {
                    color: '#999999'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.value}'
            }
        }]
    });
});
