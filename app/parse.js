'use strict'

const os = require('os');
const exec = require('child_process').exec;
const moment = require('moment');

$(document).ready(function() {
    $('.hostname').append(os.hostname());

    $('.memory').append(
        format[$('.memory').find('.value').data('format')]()
    );

    $('.uptime').find('.value').each(function() {
        $(this).append(
            format[$(this).data('format')](os.uptime())
        )
    });

    $('.datetime').find('.value').each(function() {
        $(this).append(moment().format($(this).data('format')))
    });

    $('.raw-command').each(function() {
        exec($(this).text(), (err, stdout, stderr) => {
            console.log(stderr);
            $(this).text('');
            $(this).append(stdout);
        });
    });

    //crappy refresh. Make this better
    setTimeout("location.reload(true);", 1000);
});

var format = {

    bytes: function() {
        
    },

    kiloBytes: function(n) {

    },

    megaBytes: function(n) {
   
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
