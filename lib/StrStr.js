function StrStr(){
}

/**
 * [strStr Boyer-Moore substring search algorithm implementation]
 * @param  {[type]} haystack [description]
 * @param  {[type]} needle   [description]
 * @return {[type]}          [Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.]
 */
StrStr.prototype.strStr = function(haystack, needle) {
	var index;

	if (!haystack && !needle)
		return 0;

	outerloop: for (var i = 0; i < haystack.length; i++) {
		for (var j = 0; j < needle.length; j++) {
			if (haystack[i+j] !== needle[j]) {
				continue outerloop;
			}
		}
		return i;
	}
	
   	return -1;
};

module.exports = StrStr;
