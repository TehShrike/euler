"use strict";

var _ = require('underscore')._;

var divisible_by_all = _.find(_.range(20, 1000000000, 20), function(num) {
	return _.all(_.range(20, 1, -1), function(divisor) { return num % divisor === 0; });
});

console.log(divisible_by_all);