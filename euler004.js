"use strict";

var _ = require('underscore')._;

function is_palindrome(num) {
	var as_str = String(num);
	var chunk = Math.floor(as_str.length / 2);
	
	return typeof _.find(_.range(0, chunk), function findNonMatching(index) { 
		return as_str.charAt(index) !== as_str.charAt(as_str.length - index - 1);
	}) === 'undefined';
}

var largest_palindrome = _.reduce(_.range(999, 100, -1), function(memo, first) {
	return _.reduce(_.range(999, first, -1), function(inner_memo, second) {
		return is_palindrome(first * second) ? Math.max(inner_memo, first * second) : inner_memo;
	}, memo);
}, 0);


console.log(largest_palindrome);