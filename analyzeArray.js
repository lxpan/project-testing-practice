export default function analyzeArray(numbers) {
    return {
        average: numbers.reduce((sum, value) => sum + value) / numbers.length,
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        length: numbers.length,
    };
}
