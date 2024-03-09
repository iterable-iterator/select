import {iter} from '@iterable-iterator/iter';
import {next} from '@iterable-iterator/next';

/**
 * Returns the first value of the input iterable. If the iterable is
 * exhausted, throws a {@link StopIteration}.
 *
 * @param {Iterable} iterable - The input iterable.
 * @returns {any} The first value of the input iterable.
 */
const first = (iterable) => next(iter(iterable));
export default first;
