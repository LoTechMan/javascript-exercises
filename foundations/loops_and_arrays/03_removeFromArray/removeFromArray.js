const removeFromArray = function(arr, ...args) {	
	for (const arg of args) {
		arr = arr.filter(item => item !== arg);
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
