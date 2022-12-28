import reverseString from "./reverseString";

test('one string', () => {
    expect(reverseString('foobar')).toMatch('raboof');
});

test('two strings', () => {
    expect(reverseString('foobar foo')).toMatch('oof raboof');
});

test('exception: numbers', () => {
    expect(() => reverseString(123)).toThrow(Error);
});
