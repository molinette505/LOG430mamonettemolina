import { add, factorial } from '../src/utils.js';

// Test 1 : Addition simple
test('add(2, 4) should return 6', () => {
    expect(add(2, 4)).toBe(6);
});

// Test 2 : Factorielle de 4
test('factorial(4) should return 24', () => {
    expect(factorial(4)).toBe(24);
});
