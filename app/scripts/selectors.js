'use strict'

//Prevents us constantly querying the DOM
$(document).ready(function() {
    const uptime = $('.uptime');
    const hostname = $('.hostname');
    const ram = $('.ram');
    const disk = $('.disk');
    const datetime = $('.datetime');
    const rawcommand = $('.raw-command');
    const loadaverage = $('.load-average');
    const chartgauge = $('[data-format="chart-gauge"]');
    const chartbar = $('[data-format="chart-bar"]');
    const cpu = $('.cpu');

    exports.cpu = cpu;
    exports.ram = ram;
    exports.disk = disk;
    exports.uptime = uptime;
	exports.chartbar = chartbar;
    exports.datetime = datetime;
    exports.hostname = hostname;
    exports.chartgauge = chartgauge;
    exports.rawcommand = rawcommand;
    exports.loadaverage = loadaverage;
});
