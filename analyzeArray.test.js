import analyzeArray from './analyzeArray';

const testArray = [1, 8, 3, 4, 2, 6];
const testArrayNegatives = [-1, -2, -3, -4];

test('average', () => {
    expect(analyzeArray(testArray)).toMatchObject({ average: 4 });
});

test('min', () => {
    expect(analyzeArray(testArray)).toMatchObject({ min: 1 });
});

test('max', () => {
    expect(analyzeArray(testArray)).toMatchObject({ max: 8 });
});

test('length', () => {
    expect(analyzeArray(testArray)).toMatchObject({ length: 6 });
});

test('length', () => {
    expect(analyzeArray(testArrayNegatives)).toMatchObject({
        average: -2.5,
        min: -4,
        max: -1,
        length: 4,
    });
});
