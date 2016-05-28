'use strict'

//Prevents us constantly querying the DOM
$(document).ready(function() {
    const uptime = $('.uptime');
    const hostname = $('.hostname');
    const memory = $('.memory');
    const diskusage = $('.disk-usage');
    const datetime = $('.datetime');
    const rawcommand = $('.raw-command');
    const loadaverage = $('.load-average');
    const chartgauge = $('[data-format="chart-gauge"]');
    const chartbar = $('[data-format="chart-bar"]');

    exports.hostname = hostname;
    exports.memory = memory;
    exports.uptime = uptime;
    exports.diskusage = diskusage;
    exports.datetime = datetime;
    exports.rawcommand = rawcommand;
    exports.chartgauge = chartgauge;
	exports.chartbar = chartbar;
});
