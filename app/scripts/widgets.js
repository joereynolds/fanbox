'use strict';

const os = require('os');
const format = require('./format');
const moment = require('moment');
const diskusage = require ('diskusage');
const selectors = require('./selectors');
const exec = require('child_process').exec;

var widgets = {
    hostname: function process(obj) {
        obj.text(os.hostname());
    },

    uptime: function process(obj) {
        obj.text(format[obj.data('format')](os.uptime()));
    },

    datetime: function process(obj) {
        obj.text(moment().format(obj.data('format')));
    },

    rawcommand: function process(obj) {
        exec(obj.data('command'), (err, stdout, stderr) => {
            obj.text(stdout);
        });
    },

    cpu: function process(obj) {
        $('.cpu .bar-inner').each(function() {
        });
    },

    ram: function process(obj) {
        $('[id^="ram-chart"].c3').each(function() {
            $(this).data('c3-chart').load({
                columns: [['data', format['percent'](os.totalmem() - os.freemem(), os.totalmem())]]
            });
        });
        $('.ram .bar-inner').each(function() {
            $(this).width(format['percent'](os.totalmem() - os.freemem(), os.totalmem()) + '%')
        });
    },

    disk: function process(obj) {
        diskusage.check(selectors.disk.data('disk'), (err, info) => {
            let selectedFormat = obj.data('format');
            if (typeof format[selectedFormat] != "undefined") {
                obj.text(
                    format[selectedFormat](info.available) + ' / ' + format[selectedFormat](info.total)
                )
            }
        });
    }

};


module.exports = widgets
