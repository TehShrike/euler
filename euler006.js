"use strict";

var _ = require('underscore')._;

var range = _.range(1, 101);

var sum_of_squares = _.reduce(range, function(memo, num) {
	return memo + Math.pow(num, 2);
}, 0);

var sum = _.reduce(range, function(memo, num) {
	return memo + num;
}, 0);

var square_of_sum = Math.pow(sum, 2);

console.log(square_of_sum + " - " + sum_of_squares + " = " + (square_of_sum - sum_of_squares));