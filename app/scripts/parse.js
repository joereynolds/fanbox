'use strict';


const selectors = require('./selectors');
const exec = require('child_process').exec;
const libCpuUsage = require('cpu-usage');
const config = require('../config.json');
const widgets = require('./widgets');
const c3 = require('c3');

$(document).ready(function () {
    var i = 0;
    $(selectors.chartgauge).each(function () {
        i++;
        var type = $(this).parent().attr('class');
        var id = `#${type}-chart-${i}`;
        $(this).html(`<div id="${type}-chart-${i}"></div>`);
        var chart = c3.generate({
            bindto: id,
            data  : {
                columns: [
                    ['data', 0]
                ],
                type   : 'gauge'
            },
            color : {
                pattern  : ['#478433', '#F6C600', '#F97600', '#FF0000' ],
                threshold: {
                    values: [30, 60, 90, 100]
                }
            }
        });
        $(id).data('c3-chart', chart)
    });

    $(selectors.chartbar).each(function () {
        $(this).append('<div class="bar"><div class="bar-inner"></div></div>')
    });

    libCpuUsage(config.refresh * 1000, function (load) {
        $('[id^="cpu-chart"].c3').each(function() {
            $(this).data('c3-chart').load({
                columns: [['data', load]]
            });
        });
    });

    setInterval(
        () => {
            for (let selector in selectors) {
                selectors[selector].find('.value').each(function() {
                    widgets[selector]($(this));
                });
            }

            selectors.rawcommand.each(function () {
                exec($(this).data('command'), (err, stdout, stderr) => {
                    $(this).text(stdout);
                });
            });
        },
        config.refresh * 1000
    );
});

$(window).resize(function() {
    window.location.href = window.location.href
});
