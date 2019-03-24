/**
 * test-test-pipeline.js
 * copyright 2019, Jurgen Leschner - github.com/jldec - MIT license
 *
**/

var test = require('tape');

var testPipeline = require('../test-pipeline.js');

test('test-test-pipeline', function(t) {
  t.deepEqual(testPipeline(3), [3, 'booger']);
  t.end();
});
