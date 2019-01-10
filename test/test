/**
 * node version required: ^10.15.0
 */

const assert = require('assert').strict;

const getLongestSlice = require('./getLongestSlice');

function test() {
    assert.strictEqual(JSON.stringify(getLongestSlice([2, 4, 5, 8, 10, 11, 12, 6, 7])), 
        JSON.stringify([10, 11, 12]), 'something wrong!')

    assert.strictEqual(JSON.stringify(getLongestSlice([3,2,4,5,6,1,9])), 
        JSON.stringify([4,5,6]), 'something wrong!')

    assert.strictEqual(JSON.stringify(getLongestSlice([2])), 
    JSON.stringify([2]), 'something wrong!')

    assert.strictEqual(JSON.stringify(getLongestSlice([-8, -7, -6, -5, 4, 5])), 
    JSON.stringify([-8, -7, -6, -5]), 'something wrong!')
}

// 运行测试
test();
