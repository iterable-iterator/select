import {next} from '@iterable-iterator/next';
import {_tail} from '@iterable-iterator/slice';

/**
 * Returns the last value of the input iterable. If the iterable is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {any} The last value of the input iterable.
 */
const last = (iterable) => next(_tail(iterable, 1));
export default last;
