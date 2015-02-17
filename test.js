'use strict';

var test = require('tape');

var afterDelay = require('./');

test('delay works', function (t) {
	t.plan(2);

	var start = Date.now();

	afterDelay('test1', function () {
		var diff = Math.abs(Date.now() - 100 - start);
		t.assert(diff < 10, 'Should be within expected delay (10 < ' + diff + ')');
	}, 100);

	afterDelay('test2', function () {
		t.fail('Should be cancelled');
	}, 100);

	setTimeout(function () {
		afterDelay('test2', function () {
			var diff = Math.abs(Date.now() - 150 - start);
			t.assert(diff < 20, 'Should be within expected delay (20 < ' + diff + ')');
		}, 100);
	}, 50);


	afterDelay('test3', function () {
		t.fail('Should be cancelled');
	}, 30);
	afterDelay.cancel('test3');
});
