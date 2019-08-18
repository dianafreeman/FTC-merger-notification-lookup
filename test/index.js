/* eslint-disable */
const assert = require('assert');

describe('#find()', () => {
    it('should set timeout', function () {
        // should set the timeout of this test to 1000 ms; instead will fail
        this.timeout(1000);
        assert.ok(true);
    });
});