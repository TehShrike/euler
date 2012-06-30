"use strict";

var _ = require('underscore')._;

var oddNumberIsPrime = function(num) {
	var sqrt = Math.ceil(Math.sqrt(num));
	return _.all(_.range(3, sqrt + 2, 2), function(divisor) {
		return num % divisor !== 0;
	});
};

var findNextPrime = function(start) {
	var end = start + 100;
	if (start === 2) {
		return 3;
	} else {
		return _.find(_.range(start + 2, end, 2), function(num) {
			return oddNumberIsPrime(num);
		}) || findNextPrime(end);
	}
};

console.log(_.reduce(_.range(1, 10001), function(memo, num) {
	return findNextPrime(memo);
}, 2));