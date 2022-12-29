/* ASCII values
A: 65, Z: 90
a: 97, z: 122
*/

const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

export default function caesarCipher(string, shift) {
    // convert negative (left) shifts into the equivalent right shift
    if(shift < 0) {
        shift = shift + 26;
    }

    // shifts strings given each character's ASCII code
    function performShift(_code, codeMin, codeMax) {
        // check if lowercase or uppercase
        if(_code >= codeMin && _code <= codeMax) {
            const naiveShift = _code + shift;
            // shifted ascii codes must wrap 'within' the given min and max (a/A & z/Z) codes
            const codeShifted = codeMin + (naiveShift - codeMin) % (codeMax - codeMin + 1);
            return codeShifted;
        }
    }

    const asciiCodeShifted = [];

    for(let i = 0; i < string.length; i++) {
        const char = string[i]
        const charCode = string.charCodeAt(i);

        // leave punctuation symbols as is
        if(punctuation.indexOf(char) >= 0) {
            asciiCodeShifted.push(charCode);
            continue;
        } else if(char === ' ') {
            asciiCodeShifted.push(' ');
        }
        /* set min & max ASCII values for lower and upper case letters respectively
            a-z is 97 to 122
            A-Z is 65 to 90
        */
        asciiCodeShifted.push(performShift(charCode, 97, 122) | performShift(charCode, 65, 90));
    }

    const caesarCipher = String.fromCharCode(...asciiCodeShifted);
    return caesarCipher;
}
