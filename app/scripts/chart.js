'use strict'


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
    }


};

module.exports = chart
