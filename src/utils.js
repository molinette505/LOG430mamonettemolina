export function add(a, b) {
    return a + b;
}

export function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
