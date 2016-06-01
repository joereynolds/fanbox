'use strict'

//Prevents us constantly querying the DOM
$(document).ready(function() {
    const cpu = $('.cpu');
    const ram = $('.ram');
    const disk = $('.disk');
    const uptime = $('.uptime');
    const hostname = $('.hostname');
    const datetime = $('.datetime');
    const rawcommand = $('.raw-command');
    const loadaverage = $('.load-average');

    //Generic selector to target all charts.
    const chart = $('[data-format^="chart"]');

    const chartgauge = $('[data-format="chart-gauge"]');
    const chartbar = $('[data-format="chart-bar"]');
    const chartbullet = $('[data-format="chart-bullet"]');

    exports.cpu = cpu;
    exports.ram = ram;
    exports.disk = disk;
    exports.uptime = uptime;
    exports.datetime = datetime;
    exports.hostname = hostname;
    exports.rawcommand = rawcommand;
    exports.loadaverage = loadaverage;

    exports.chart = chart;
	exports.chartbar = chartbar;
    exports.chartgauge = chartgauge;
    exports.chartbullet = chartbullet;

});
