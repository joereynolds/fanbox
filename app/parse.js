'use strict'

var os = require('os');

$(document).ready(function() {
    $('.hostname').append(os.hostname());
});


