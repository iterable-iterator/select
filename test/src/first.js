import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {StopIteration} from '@iterable-iterator/next';
import {range} from '@iterable-iterator/range';

import {first} from '#module';

test('first', (t) => {
	t.throws(
		() => first(range(0)),
		{instanceOf: StopIteration},
		'first on empty iterator throws StopIteration',
	);

	const it = iter(range(57, 14, -3));

	t.is(first(it), 57);
	t.is(first(it), 54);
	t.is(first(it), 51);
});
