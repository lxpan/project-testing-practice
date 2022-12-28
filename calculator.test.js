import { calculator } from "./calculator";

const calc = calculator;

test('add ints', () => {
    expect(calc.add(1, 1)).toBe(2);
});

test('add decimals', () => {
    expect(calc.add(0.2, 0.1)).toBeCloseTo(0.3);
});

test('subtract ints', () => {
    expect(calc.subtract(6, 3)).toBe(3);
});

test('subtract decimals', () => {
    expect(calc.subtract(0.3, 0.1)).toBeCloseTo(0.2);
});

test('divide ints', () => {
    expect(calc.divide(4, 2)).toBe(2);
});

test('divide - non-int quotient', () => {
    expect(calc.divide(3, 2)).toBe(1.5);
});

test('multiply ints', () => {
    expect(calc.multiply(2, 2)).toBe(4);
});

test('multiply decimals', () => {
    expect(calc.multiply(2, 0.33)).toBeCloseTo(0.66);
});