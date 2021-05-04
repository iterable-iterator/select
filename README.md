:point_down: [@iterable-iterator/select](https://iterable-iterator.github.io/select)
==

Iterable item selection for JavaScript.
See [docs](https://iterable-iterator.github.io/select/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {first, last, nth} from '@iterable-iterator/select';
import {range} from '@iterable-iterator/range';
first(range(10)); // 0
last(range(10)); // 9
nth(range(10), 0); // 0
nth(range(10), -1); // 9
nth(range(10), -3); // 7
```

[![License](https://img.shields.io/github/license/iterable-iterator/select.svg)](https://raw.githubusercontent.com/iterable-iterator/select/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/select.svg)](https://www.npmjs.org/package/@iterable-iterator/select)
[![Tests](https://img.shields.io/github/workflow/status/iterable-iterator/select/ci:test?event=push&label=tests)](https://github.com/iterable-iterator/select/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/iterable-iterator/select.svg)](https://david-dm.org/iterable-iterator/select)
[![Dev dependencies](https://img.shields.io/david/dev/iterable-iterator/select.svg)](https://david-dm.org/iterable-iterator/select?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/select.svg)](https://github.com/iterable-iterator/select/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/select.svg)](https://www.npmjs.org/package/@iterable-iterator/select)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/select.svg)](https://codeclimate.com/github/iterable-iterator/select/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/select.svg)](https://codeclimate.com/github/iterable-iterator/select/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/select/main.svg)](https://codecov.io/gh/iterable-iterator/select)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/select.svg)](https://codeclimate.com/github/iterable-iterator/select/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/select/badge.svg)](https://iterable-iterator.github.io/select/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/select)](https://bundlephobia.com/result?p=@iterable-iterator/select)
