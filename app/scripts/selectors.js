'use strict'

var exports = module.exports = {};

//Prevents us constantly querying the DOM
$(document).ready(function() {
    var uptime = $('.uptime');
    var hostname = $('.hostname');
    var memory = $('.memory');
    var diskusage = $('.disk-usage');
    var datetime = $('.datetime');
    var rawcommand = $('.raw-command');

    exports.hostname = hostname;
    exports.memory = memory;
    exports.uptime = uptime;
    exports.diskusage = diskusage;
    exports.datetime = datetime;
    exports.rawcommand = rawcommand;
});
