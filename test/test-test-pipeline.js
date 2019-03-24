/**
 * test-test-pipeline.js
 * copyright 2019, Jurgen Leschner - github.com/jldec - MIT license
 *
**/

var test = require('tape');

var testPipeline = require('../test-pipeline.js');

test('test-test-pipeline', function(t) {
  t.equal(testPipeline(3), 3);
  t.end();
});
