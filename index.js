'use strict';

var delays = {};

function afterDelay(name, fn, timeout) {
	afterDelay.cancel(name);

	// This is optional—you can also cancel a delay using this function
	if (typeof fn === 'function' && typeof timeout === 'number') {
		delays[name] = setTimeout(fn, timeout);
	}
}

afterDelay.cancel = function (name) {
	if (delays[name]) {
		clearTimeout(delays[name]);
	}
};

module.exports = afterDelay;