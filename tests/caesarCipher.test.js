import caesarCipher from "../caesarCipher";

test('right shift 3', () => {
    expect(caesarCipher('abc',3)).toBe('def');
});

test('wrap forwards', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

;
test('maintain case', () => {
    expect(caesarCipher('aBc', 3)).toBe('dEf');
});

test('reverse wrap around', () => {
    expect(caesarCipher('abcd', -3)).toBe('xyza');
});

test('reverse wrap entirely around', () => {
    expect(caesarCipher('aaa', -26)).toBe('aaa');
});

test('punctuation', () => {
    expect(caesarCipher('a!a', 3)).toBe('d!d');
});
