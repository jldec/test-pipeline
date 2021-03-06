## test-pipeline
[![Build Status Azure Pipelines](https://dev.azure.com/jldec/test-pipeline/_apis/build/status/jldec.test-pipeline?branchName=master)](https://dev.azure.com/jldec/test-pipeline/_build/latest?definitionId=2&branchName=master)
[![Build Status Travis CI](https://travis-ci.org/jldec/test-pipeline.svg?branch=master)](https://travis-ci.org/jldec/test-pipeline)

Simple js module for testing secrets in CI. Used in this [Azure Pipeline](https://dev.azure.com/jldec/test-pipeline) and this [Travis CI Build](https://travis-ci.org/jldec/test-pipeline)

Checks for environment variable TEST_SECRET to have the value 'booger'

### How to edit Azure Pipeline variables
Click on edit, then click on the `⋮` on the right, then click on Variables. 
![edit Azure Pipeline secret variable](edit-variables.png)

### How to make secret variable
Click on the padlock next to the value.
![edit secret variable](secret-variable.png)

```sh
$ TEST_SECRET=booger npm test

> test-pipeline@0.0.1 test ~/azure/test-pipeline
> tape test/*.js

TAP version 13
# test-test-pipeline
x 3
TEST_SECRET booger
ok 1 should be equivalent

1..1
# tests 1
# pass  1

# ok
```

```sh
$ TEST_SECRET=wooger npm test

> test-pipeline@0.0.1 test ~/azure/test-pipeline
> tape test/*.js

TAP version 13
# test-test-pipeline
x 3
TEST_SECRET wooger
not ok 1 should be equivalent
  ---
    operator: deepEqual
    expected: [ 3, 'booger' ]
    actual:   [ 3, 'wooger' ]
    at: Test.<anonymous> (~/azure/test-pipeline/test/test-test-pipeline.js:12:5)
    stack: |-
      Error: should be equivalent
          at Test.assert [as _assert] (~/azure/test-pipeline/node_modules/tape/lib/test.js:226:54)
          at Test.bound [as _assert] (~/azure/test-pipeline/node_modules/tape/lib/test.js:77:32)
          at Test.tapeDeepEqual (~/azure/test-pipeline/node_modules/tape/lib/test.js:423:10)
          at Test.bound [as deepEqual] (~/azure/test-pipeline/node_modules/tape/lib/test.js:77:32)
          at Test.<anonymous> (~/azure/test-pipeline/test/test-test-pipeline.js:12:5)
          at Test.bound [as _cb] (~/azure/test-pipeline/node_modules/tape/lib/test.js:77:32)
          at Test.run (~/azure/test-pipeline/node_modules/tape/lib/test.js:96:10)
          at Test.bound [as run] (~/azure/test-pipeline/node_modules/tape/lib/test.js:77:32)
          at Immediate.next [as _onImmediate] (~/azure/test-pipeline/node_modules/tape/lib/results.js:75:19)
          at processImmediate (timers.js:632:19)
  ...

1..1
# tests 1
# pass  0
# fail  1

npm ERR! Test failed.  See above for more details.
``` 
