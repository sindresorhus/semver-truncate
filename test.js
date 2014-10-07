'use strict';
var test = require('ava');
var semverTruncate = require('./');

test(function (t) {
	t.assert(semverTruncate('1.2.3-foo', 'patch') === '1.2.3');
	t.assert(semverTruncate('1.2.3+foo', 'patch') === '1.2.3');
	t.assert(semverTruncate('1.2.3', 'minor') === '1.2.0');
	t.assert(semverTruncate('1.2.3', 'major') === '1.0.0');
	t.end();
});
