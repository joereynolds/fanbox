'use strict';


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

    percent: function (percent, total) {
        return percent / total * 100;
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

module.exports = format;
