import { calculator } from "./calculator";

const calc = calculator;

test('add', () => {
    expect(calc.add(1, 1)).toBe(2);
});

test('subtract', () => {
    expect(calc.subtract(6, 3)).toBe(3);
});

test('divide', () => {
    expect(calc.divide(4, 2)).toBe(2);
});

test('multiply', () => {
    expect(calc.multiply(2, 2)).toBe(4);
});
