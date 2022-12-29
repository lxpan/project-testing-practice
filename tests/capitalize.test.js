import capitalize from '../capitalize';

test('all lowercase', () => {
    expect(capitalize('foobar')).toMatch('Foobar');
});

test('all capitals', () => {
    expect(capitalize('FOOBAR')).toMatch('FOOBAR');
});

test('title case', () => {
    expect(capitalize('Foobar')).toMatch('Foobar');
});

test('numbers', () => {
    expect(() => capitalize(123)).toThrow(Error);
});
