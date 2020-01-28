
Highcharts.chart('container', {

    chart: {
        height: 600,
        inverted: true
    },

    title: {
        text: 'Highcharts Org Chart'
    },

    series: [{
        type: 'organization',
        name: 'Highsoft',
        keys: ['from', 'to'],
        data: [
            ['40', '41'],
            ['40', '42'],
            ['41', '43'],
            ['41', '44'],
            ['41', '52'],
            ['42', '47'],
        ],
        levels: [{
            level: 0,
            color: 'silver',
            dataLabels: {
                color: 'black'
            },
            height: 25
        }, {
            level: 1,
            color: 'pink',
            dataLabels: {
                color: 'black'
            },
            height: 25
        }, ],

        nodes: [{

            
            id: '47', //data!!
            title: null,
            name: 'akira',
            color: "#fcc657",
            description: "soy un gato :3"
            
        },{

            
            id: '42', //data!!
            title: null,
            name: 'ar',
            color: "purple",
            column: 2,
            layout: 'hanging'


            
        }],
        
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
            color: 'white',
            nodeFormatter: function () {
                // Call the default renderer
                var html = Highcharts.defaultOptions
                    .plotOptions
                    .organization
                    .dataLabels
                    .nodeFormatter
                    .call(this);

                // Do some modification
                html = html.replace(
                    '<h4 style="',
                    '<h4 style="font-style: italic;'
                );
                return html;
            }
        },
        borderColor: 'white',
        nodeWidth: 65
    }],
    tooltip: {
        outside: true
    },
    exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
    }

});
