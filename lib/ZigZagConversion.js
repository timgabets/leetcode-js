'use strict'; 

function ZigZagConversion(){
}

/**
 * [convert perform "zig zag conversion"]
 * 
 *	
 * @param  {[type]} s [input string]
 * @param  {[type]} numRows [number of rows]
 * @return {[type]}   [The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 *	P   A   H   N
 *	A P L S I I G
 *	Y   I   R
 *	And then read line by line: "PAHNAPLSIIGYIR"]
 */
ZigZagConversion.prototype.convert = function(s, numRows) {
	var items = [];
	var column = [];

	for (var i = 0; i < s.length; i++){
		column = new Array(numRows);
			
	}
	console.log(column);
};

module.exports = ZigZagConversion;
