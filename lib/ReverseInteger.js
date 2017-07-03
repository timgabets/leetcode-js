'use strict'; 

function ReverseInteger(){
}

ReverseInteger.prototype.reverse = function(x) {
	var s = x.toString();
	var resultStr = '';
	var resultInt;
	var INT_MAX = 2147483647;
	var INT_MIN = -2147483648;

	for (var i = s.length - 1; i >= 0; i--)
		resultStr += s[i];
	
	if (x < 0)
		resultInt = parseInt(resultStr) * -1;	
	else
		resultInt =  parseInt(resultStr);

	if (resultInt < INT_MAX && resultInt > INT_MIN)
		return resultInt;
	else
		return 0;
};

module.exports = ReverseInteger;
