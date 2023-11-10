// filename: test.js
const { test, expect } = require('@jest/globals');

test('Test that 1 is 1', () => {
    expect(1).toBe(1);
});

test('Test that 1 is not 0', () => {
    expect(1).toBe(0);
});
