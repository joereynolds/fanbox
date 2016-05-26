'use strict';

const selector    = require('./selectors.js');
const os          = require('os');
const exec        = require('child_process').exec;
const disk        = require('diskusage');
const moment      = require('moment');
const c3          = require('c3');
const libCpuUsage = require('cpu-usage');

$(document).ready(function () {
    var i = 0;
    $('.value[data-format="chart"]').each(function () {
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
                pattern  : ['#60B044', '#F6C600', '#F97600', '#FF0000' ],
                threshold: {
                    values: [30, 60, 90, 100]
                }
            }
        });
        $(id).data('c3-chart', chart)
    });

    libCpuUsage(1000, function (load) {
        $('[id^="cpu-chart"].c3').each(function() {
            $(this).data('c3-chart').load({
                columns: [['data', load]]
            });
        });
    });

    setInterval(
        () => {
            selector.hostname.text(os.hostname());

            selector.memory.find('.value').each(function () {
                $(this).text(
                    format[$(this).data('format')]('placeholder', 'placeholder')
                )
            });

            selector.uptime.find('.value').each(function () {
                $(this).text(
                    format[$(this).data('format')](os.uptime())
                )
            });
            selector.diskusage.find('.value').each(function () {
                disk.check($('.disk-usage').data('disk'), (err, info) => {
                    var selectedFormat = $(this).data('format');
                    if (typeof format[selectedFormat] != "undefined") {
                        $(this).text(
                            format[selectedFormat](info.available) + ' / ' + format[selectedFormat](info.total)
                        )
                    }
                });
            });

            selector.datetime.find('.value').each(function () {
                $(this).text(moment().format($(this).data('format')))
            });

            selector.rawcommand.each(function () {
                exec($(this).data('command'), (err, stdout, stderr) => {
                    $(this).text(stdout);
                });
            });
        },
        1000
    );
});

var format = {

    bytes: function (n) {
        return (n / 8) + 'B';
    },

    kiloBytes: function (n) {
        return Math.floor(n / 1024) + 'KB';
    },

    megaBytes: function (n) {
        return Math.floor(n / 1048576) + 'MB';
    },

    gigaBytes: function (n) {
        return Math.floor(n / 1073741824) + 'GB';
    },

    percent: function (nPercentof, subject) {
        return '%';
    },

    /*
     * Converts n milliseconds(by default) into seconds
     */
    seconds: function (n, nTimeFormat = "seconds") {

        var time = {
            seconds: 1
        };

        return Math.floor(n / time[nTimeFormat]);
    },

    /*
     * Converts n nTimeFormat into minutes
     */
    minutes: function (n, nTimeFormat = "seconds") {

        var time = {
            milliseconds: 60000,
            seconds     : 60
        };

        return Math.floor(n / time[nTimeFormat]);
    },

    /*
     * Converts n nTimeFormat into hours
     */
    hours: function (n, nTimeFormat = "seconds") {

        var time = {
            seconds: 3600

        };

        return Math.floor(n / time[nTimeFormat]);
    },
};
