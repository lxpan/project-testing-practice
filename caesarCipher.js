/* ASCII values
A: 65, Z: 90
a: 97, z: 122
*/

const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

export default function caesarCipher(string, shift) {
    function shiftLowerCase(_code) {
        // if lowercase
        if(_code >= 97 && _code <= 122) {
            // convert negative (left) shifts into the equivalent right shift
            if(shift < 0) {
                shift = 26 + shift;
            }

            // clamp ASCII values between 97 and 122 for lowercase
            const xMin = 97;
            const xMax = 122;
            
            const naiveShift = _code + shift;
            const codeShifted = xMin + (naiveShift - xMin) % (xMax - xMin + 1);
            return codeShifted;
        }
    }
    
    function shiftUpperCase(_code) {
        if (_code >= 65 && _code <= 90) {
            // convert negative (left) shifts into the equivalent right shift
            if(shift < 0) {
                shift = 26 + shift;
            }
            
            const xMin = 65;
            const xMax = 90;
            
            const naiveShift = _code + shift;
            const codeShifted = xMin + (naiveShift - xMin) % (xMax - xMin + 1);
            return codeShifted;
        }
    }

    const encrypted = [];

    for(let i = 0; i < string.length; i++) {
        const char = string[i]
        const charCode = string.charCodeAt(i);

        // if char is punctuation symbol
        if(punctuation.indexOf(char) >= 0) {
            encrypted.push(charCode);
            continue;
        } else if(char === ' ') {
            encrypted.push(' ');
        }

        encrypted.push(shiftLowerCase(charCode) | shiftUpperCase(charCode));
    }

    return String.fromCharCode(...encrypted);
}
