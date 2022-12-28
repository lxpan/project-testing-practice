import caesarCipher from "./caesarCipher";

test('right shift 3', () => {
    expect(caesarCipher('aaa',3)).toBe('ddd');
});

test('wrap forwards', () => {
    expect(caesarCipher('aaa', 30)).toBe('fff');
});

test('maintain case', () => {
    expect(caesarCipher('aAa', 30)).toBe('fFf');
});

// test('reverse wrap around', () => {
//     expect(caesarCipher('abcd', -3)).toBe('xyza');
// });

// test('reverse wrap entirely around', () => {
//     expect(caesarCipher('aaa', -26)).toBe('aaa');
// });

test('punctuation', () => {
    expect(caesarCipher('a!a', 3)).toBe('d!d');
});
