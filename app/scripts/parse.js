'use strict';

const widgets = require('./widgets');
const config = require('../config.json');
const selectors = require('./selectors');

const c3 = require('c3');
const libCpuUsage = require('cpu-usage');

$(document).ready(() => {

    //Go through each chart type specialising in certain cases
    var i = 0;
    $(selectors.chart).each(function() {

        i++;
        var type = $(this).parent().attr('class');
        var id = `#${type}-chart-${i}`;
        $(this).html(`<div id="${type}-chart-${i}"></div>`);

        var chartType = $(this).data('format').split('-')[1];

        if (chartType === 'bullet') {
            $(this).append('<div class="bar"><div class="bar-inner"></div></div>')
        }

        if (typeof(chartType) !== 'undefined' && chartType !== 'bullet') {
            var chart = c3.generate({
                bindto: id,
                data : {
                    columns: [
                        ['data', 0]
                    ],
                    type : chartType
                },
                color : {
                    pattern : ['#478433', '#F6C600', '#F97600', '#FF0000' ],
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
