# es-leftpad

A Node 4.x compatible ES2015 alternative to [left-pad](https://www.npmjs.com/package/left-pad)

## Install

```bash
$ npm install es-leftpad
```


## Usage

```js
leftpad = require('es-leftpad')

leftpad('foo', 5)
// => "  foo"

leftpad('foobar', 6)
// => "foobar"

leftpad(1, 2, 0)
// => "01"
```

## Benchmark

Performance compared to `left-pad` using [benchmark.js](https://github.com/bestiejs/benchmark.js)

- Padding to 80 chars:
```
leftPad x 1,420,504 ops/sec ±0.45% (92 runs sampled)
es-leftPad x 4,607,534 ops/sec ±1.31% (91 runs sampled)
Padding to 8 ("999", 80, "0")): Fastest is es-leftPad
```

- Padding to 40 chars:
```
leftPad x 2,602,721 ops/sec ±0.94% (89 runs sampled)
es-leftPad x 5,120,414 ops/sec ±0.58% (93 runs sampled)
Padding to 8 ("999", 40, "0")): Fastest is es-leftPad
```

- Padding to 12 chars:
```
leftPad x 6,310,671 ops/sec ±0.53% (92 runs sampled)
es-leftPad x 5,318,553 ops/sec ±0.72% (92 runs sampled)
Padding to 12 (999, 12)): Fastest is leftPad
```


## Tests

Passing all tests from [left-pad/test.js](https://github.com/camwest/left-pad/blob/master/test.js)