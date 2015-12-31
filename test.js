import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('1.2.3-foo', 'patch'), '1.2.3');
	t.is(fn('1.2.3+foo', 'patch'), '1.2.3');
	t.is(fn('1.2.3', 'minor'), '1.2.0');
	t.is(fn('1.2.3', 'major'), '1.0.0');
});
