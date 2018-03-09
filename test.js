var assert = require('assert')
var Piecewise = require('./')

relu = Piecewise([-1, 0, 1], [0, 0, 1])

assert.equal(relu(-1.5), 0)
assert.equal(relu(-0.5), 0)
assert.equal(relu(0.5), 0.5)
assert.equal(relu(1.5), 1.5)
