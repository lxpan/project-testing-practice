import reverseString from "./reverseString";

test('one string', () => {
    expect(reverseString('foobar')).toMatch('raboof');
});

test('two strings', () => {
    expect(reverseString('foobar foo')).toMatch('oof raboof');
});

test('letters & numbers', () => {
    expect(reverseString('foo123bar foo1')).toMatch('1oof rab321oof');
});

test('exception: numbers', () => {
    expect(() => reverseString(123)).toThrow(Error);
});
