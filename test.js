import test from 'ava';
import join from '.';

test('join strings', t => {
  t.is(join(['first', '2nd', '3rd', '4th', '5th', '6th']), 'first, 2nd, 3rd, 4th, 5th and 6th');
  t.is(join([]), '');
  t.is(join(['first', '2nd']), 'first and 2nd');
  t.is(join(['first']), 'first');
});
