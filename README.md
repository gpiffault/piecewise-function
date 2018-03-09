## piecewise-function

A piecewise function factory.

The first argument is the x values and the second the y values. It will project out of bound values on the first/last piece.

```js
var Piecewise = require('piecewise-function')

relu = Piecewise([-1, 0, 1], [0, 0, 1])
relu(-1.5)  // 0
relu(-0.5)  // 0
relu(0.5)   // 0.5
relu(1.5)   // 1.5
```
