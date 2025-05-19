import { add, factorial } from '../src/utils';

// Test 1 : Addition simple
test('add(2, 3) should return 5', () => {
    expect(add(2, 3)).toBe(5);
});

// Test 2 : Factorielle de 4
test('factorial(4) should return 24', () => {
    expect(factorial(4)).toBe(24);
});
