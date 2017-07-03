'use strict'; 

function ReverseInteger(){
}

ReverseInteger.prototype.reverse = function(x) {
	var s = x.toString();
	var resultStr = '';

	for (var i = s.length - 1; i >= 0; i--)
		resultStr += s[i];
	
	if (x < 0)
		return parseInt(resultStr) * -1;	
	else
		return parseInt(resultStr);
};

module.exports = ReverseInteger;
