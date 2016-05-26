'use strict';

const os = require('os');
const exec = require('child_process').exec;
const disk = require('diskusage');
const moment = require('moment');

$(document).ready(function() {
    setInterval(
        function() {
            $('.hostname').text(os.hostname());

            $('.memory').append(
                format[$('.memory').find('.value').data('format')]()
            );

            $('.uptime').find('.value').each(function () {
                $(this).text(
                    format[$(this).data('format')](os.uptime())
                )
            });
            $('.disk-usage').find('.value').each(function () {
                disk.check($('.disk-usage').attr('disk'), (err, info) => {
                    $(this).text(
                        format[$(this).data('format')](info.available) + ' / ' + format[$(this).data('format')](info.total)
                    )
                });
            });

            $('.datetime').find('.value').each(function () {
                $(this).text(moment().format($(this).data('format')))
            });

            $('.raw-command').each(function () {
                exec($(this).text(), (err, stdout, stderr) => {
                    console.log(stderr);
                    $(this).text('');
                    $(this).text(stdout);
                });
            });

        }, 1000)
    //crappy refresh. Make this better
    //setTimeout("location.reload(true);", 1000);
});

var format = {

    bytes: function(n) {
        return (n / 8)+ 'B';
    },

    kiloBytes: function(n) {
        return Math.floor(n / 1024 ) + 'KB';
    },

    megaBytes: function(n) {
        return Math.floor(n / 1048576) + 'MB';
    },

    gigaBytes: function(n) {
        return Math.floor(n / 1073741824 ) + 'GB';
    },

    percent: function(nPercentof, subject) {
        return '%';
    },

    /*
     * Converts n milliseconds(by default) into seconds
     */
    seconds: function(n, nTimeFormat="seconds") {

        var time = {
            seconds: 1
        };

        return Math.floor(n / time[nTimeFormat]);
    },

    /*
     * Converts n nTimeFormat into minutes
     */
    minutes: function(n, nTimeFormat="seconds") {

        var time = {
            milliseconds: 60000,
            seconds: 60
        };

        return Math.floor(n / time[nTimeFormat]);
    },

    /*
     * Converts n nTimeFormat into hours
     */
    hours: function(n, nTimeFormat="seconds") {

        var time = {
            seconds: 3600

        };

        return Math.floor(n / time[nTimeFormat]);
    },

    numeric: function(n) {
   
    }
};
