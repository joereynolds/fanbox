'use strict';


const format = require('./format');
const selectors = require('./selectors');
const chart  = require('./chart');

const os = require('os');
const moment = require('moment');
const diskusage = require ('diskusage');
const cpuusage= require('cpu-usage');
const exec = require('child_process').exec;

const widgets = {

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

        if (chart.isBulletChart(obj)) {
            exec(obj.data('command'), (err, stdout, stderr) => {
                obj.find('.bar-inner').each(function() {
                    $(this).width(
                        format['percent'](stdout, 100) + '%'
                    );
                });
            });
        } else {
            exec(obj.data('command'), (err, stdout, stderr) => {
                obj.text(stdout);
            });
        }
    },

    cpu: function process(obj) {
        if (chart.isBulletChart(obj)) {
            $('.cpu .bar-inner').each(function() {
                cpuusage((load) => {
                    $(this).width(format['percent'](load, 100) + '%')
                });
            });
        } else {
            cpuusage((load) => {
                $('[id^="cpu-chart"].c3').each(function() {
                    $(this).data('c3-chart').load({
                        columns: [['data', load]]
                    });
                });
            });
        }
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
        diskusage.check(obj.parent().data('disk'), (err, info) => {
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
