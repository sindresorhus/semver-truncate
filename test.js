import test from 'ava';
import m from './';

test(t => {
	t.is(m('1.2.3-foo', 'patch'), '1.2.3');
	t.is(m('1.2.3+foo', 'patch'), '1.2.3');
	t.is(m('1.2.3', 'minor'), '1.2.0');
	t.is(m('1.2.3', 'major'), '1.0.0');
	t.is(m('7.0.8-0ubuntu0.16.04.2', 'patch'), '7.0.8', 'PHP on Ubuntu');
});
