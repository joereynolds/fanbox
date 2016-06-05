'use strict'


const format = require('./format');

const chart = {
    isBulletChart: function (obj) {
        return obj.data('format') === 'chart-bullet';
    },

    //gross
    getBulletChartHtml: function () {
        return `<div class="bar">
                  <div class="bar-inner"></div>
                </div>`;
    },

    getChartType: function (obj) {
        return obj.data('format').split('-')[1];
    },

    //Gives the inner bar belonging to 'obj' some 'value' of 'total'
    populateBulletChart: function(obj, value, total) {
        let widgetParent = $(obj.parent());
        widgetParent.find('.bar-inner').each(function() {
            $(this).width(format['percent'](value, total) + '%')
        });
    }
};

module.exports = chart
