'use strict';

const selector    = require('./selectors.js');
const os          = require('os');
const exec        = require('child_process').exec;
const disk        = require('diskusage');
const moment      = require('moment');
const c3          = require('c3');
const libCpuUsage = require('cpu-usage');
const format      = require('./format');

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
                pattern  : ['#478433', '#F6C600', '#F97600', '#FF0000' ],
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
                $('[id^="memory-chart"].c3').each(function() {
                    $(this).data('c3-chart').load({
                        columns: [['data', format['percent'](os.freemem(), os.totalmem())]]
                    });
                });
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
