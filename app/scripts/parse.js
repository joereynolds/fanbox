'use strict';


const chart = require('./chart');
const widgets = require('./widgets');
const config = require('../config.json');
const selectors = require('./selectors');

const c3 = require('c3');

$(document).ready(() => {

    //Go through each chart type specialising in certain cases
    $(selectors.chart).each(function(index, value) {
        let type = $(this).parent().attr('class');
        let id = `#${type}-chart-${index}`;
        let idNoHash = id.substring(1);
        let chartType = chart.getChartType($(this));
 
        $(this).html(`<div id="${idNoHash}"></div>`);

        if (chart.isBulletChart($(this))) {
            $(this).append(
                `<div class="bar">
                    <div class="bar-inner"></div>
                 </div>`
            )
        }

        if (typeof(chartType) !== 'undefined' && chartType !== 'bullet') {
            let chart = c3.generate({
                bindto: id,
                data: {
                    columns: [['data', 0]],
                    type: chartType
                },
                color: {
                    pattern : ['#478433', '#F6C600', '#F97600', '#FF0000'],
                    threshold: {
                        values: [30, 60, 90, 100]
                    }
                }
            });
            $(id).data('c3-chart', chart)
        }
    });

    setInterval(
        () => {
            //The entry point for all widgets to display data
            for (let selector in selectors) {
                selectors[selector].find('.value').each(function() {
                    widgets[selector]($(this));
                });
            }
        },
        config.refresh * 1000
    );
});

$(window).resize(function() {
    window.location.href = window.location.href
});
