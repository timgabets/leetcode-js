function StringToInteger() {
}

/**
 * [myAtoi converts a string to an integer.
 * 
 * The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 
 * Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits 
 * as possible, and interprets them as a numerical value.
 *
 * The string can contain additional characters after those that form the integral number, which are ignored and have 
 * no effect on the behavior of this function.
 *
 * If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists 
 * because either str is empty or it contains only whitespace characters, no conversion is performed.
 *
 * If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of 
 * representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.]
 * 
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
StringToInteger.prototype.myAtoi = function(str) {
	s = str.trim();

	var result = 0;
	var charcode;
	var decimals = 1;
	var INT_MAX = 2147483647;
	var INT_MIN = -2147483648;

	for (var i = s.length - 1; i >= 0; i--) {
		charcode = s.charCodeAt(i);
		if (charcode >= 48 && charcode <= 57) {
			result += s[i] * decimals 
		} else if (charcode === 45 && i === 0 && result) { // -
			result *= -1;
		} else if (charcode === 43 && i === 0 && result) { // +
			continue;
		} else {
			result = 0;
			decimals = 1;
			continue;
		}

		decimals *= 10;
	}

	if (result > INT_MAX)
		return INT_MAX;

	if (result < INT_MIN)
		return INT_MIN;
	
	return result;
};

module.exports = StringToInteger;
