"use strict"

var _ = require('underscore')._;

var multiples_of_three_or_five = _.union(_.range(0, 1000, 3), _.range(0, 1000, 5));
var sum_of_multiples = _.reduce(multiples_of_three_or_five,
	function(memo, num) {
		return memo + num;
	}, 0);

console.log(sum_of_multiples);