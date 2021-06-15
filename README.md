<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmrange

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute a moving [range][range] incrementally.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-mrange
```

</section>

<section class="usage">

## Usage

```javascript
var incrmrange = require( '@stdlib/stats-incr-mrange' );
```

#### incrmrange( window )

Returns an accumulator `function` which incrementally computes a moving [range][range]. The `window` parameter defines the number of values over which to compute the moving [range][range].

```javascript
var accumulator = incrmrange( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [range][range]. If not provided an input value `x`, the accumulator function returns the current [range][range].

```javascript
var accumulator = incrmrange( 3 );

var r = accumulator();
// returns null

// Fill the window...
r = accumulator( 2.0 ); // [2.0]
// returns 0.0

r = accumulator( 1.0 ); // [2.0, 1.0]
// returns 1.0

r = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 2.0

// Window begins sliding...
r = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns 10.0

r = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 10.0

r = accumulator();
// returns 10.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrmrange = require( '@stdlib/stats-incr-mrange' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmrange( 5 );

// For each simulated datum, update the moving range...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mrange.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mrange

[test-image]: https://github.com/stdlib-js/stats-incr-mrange/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-mrange/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mrange/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mrange?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mrange
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mrange/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mrange/main/LICENSE

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

</section>

<!-- /.links -->
