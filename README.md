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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmrange

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [range][range] incrementally.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
incrmrange = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mrange@v0.2.3-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var incrmrange = require( 'path/to/vendor/umd/stats-incr-mrange/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mrange@v0.2.3-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.incrmrange;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mrange@v0.2.3-umd/browser.js"></script>
<script type="text/javascript">
(function () {

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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/mmax`][@stdlib/stats/incr/mmax]</span><span class="delimiter">: </span><span class="description">compute a moving maximum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mmin`][@stdlib/stats/incr/mmin]</span><span class="delimiter">: </span><span class="description">compute a moving minimum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/msummary`][@stdlib/stats/incr/msummary]</span><span class="delimiter">: </span><span class="description">compute a moving statistical summary incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/range`][@stdlib/stats/incr/range]</span><span class="delimiter">: </span><span class="description">compute a range incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mrange.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mrange

[test-image]: https://github.com/stdlib-js/stats-incr-mrange/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/stats-incr-mrange/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mrange/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mrange?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mrange.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mrange/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mrange/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-mrange/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-mrange/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-mrange/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-mrange/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-mrange/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-mrange/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mrange/main/LICENSE

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

<!-- <related-links> -->

[@stdlib/stats/incr/mmax]: https://github.com/stdlib-js/stats-incr-mmax/tree/umd

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats-incr-mmean/tree/umd

[@stdlib/stats/incr/mmin]: https://github.com/stdlib-js/stats-incr-mmin/tree/umd

[@stdlib/stats/incr/msummary]: https://github.com/stdlib-js/stats-incr-msummary/tree/umd

[@stdlib/stats/incr/range]: https://github.com/stdlib-js/stats-incr-range/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
