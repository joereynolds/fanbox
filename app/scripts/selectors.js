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

    exports.hostname = hostname;
    exports.ram = ram;
    exports.uptime = uptime;
    exports.disk = disk;
    exports.datetime = datetime;
    exports.rawcommand = rawcommand;
    exports.chartgauge = chartgauge;
	exports.chartbar = chartbar;
    exports.loadaverage = loadaverage;
});
