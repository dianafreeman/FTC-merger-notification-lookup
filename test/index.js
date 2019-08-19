/* eslint-disable */
const assert = require('assert');

    describe('a Test of a Test', () => {
        it('should shoud timeout and succeed', () => {
          // should set the timeout of this test to 1000 ms; instead will fail
          setTimeout(() => {
            assert(true);
          }, 1000);
        });
      });
