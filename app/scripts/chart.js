'use strict'


const chart = {
    isBulletChart: function (obj) {
        return obj.data('format') === 'chart-bullet';
    },

    getChartType: function (obj) {
        return obj.data('format').split('-')[1];
    }

};

module.exports = chart
