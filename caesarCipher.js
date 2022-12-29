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

    function shiftLowerCase(_code) {
        const codeMin = 97;  // 'a'
        const codeMax = 122; // 'z'

        // if lowercase
        if(_code >= codeMin && _code <= codeMax) {
            const naiveShift = _code + shift;
            // clamp ASCII values between 97 and 122 for lowercase
            const codeShifted = codeMin + (naiveShift - codeMin) % (codeMax - codeMin + 1);
            return codeShifted;
        }
    }
    
    function shiftUpperCase(_code) {
        const codeMin = 65;  // 'A'
        const codeMax = 90;  // 'Z'

        if (_code >= codeMin && _code <= codeMax) {
            const naiveShift = _code + shift;
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

        asciiCodeShifted.push(shiftLowerCase(charCode) | shiftUpperCase(charCode));
    }

    const caesarCipher = String.fromCharCode(...asciiCodeShifted);
    return caesarCipher;
}
