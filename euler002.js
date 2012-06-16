var sum_even_numbers = function(b, even_memo) {
	if (b % 2 === 0) {
		return b + even_memo;
	} else {
		return even_memo;
	}
};

var sum_even_fibonacci = function(a, b, even_memo, stop_at) {
	var new_b = a + b;
	
	if (new_b > stop_at) {
		return sum_even_numbers(b, even_memo);
	}
	
	return sum_even_fibonacci(b, new_b, sum_even_numbers(b, even_memo), stop_at);
};

console.log(sum_even_fibonacci(1, 2, 0, 4000000));