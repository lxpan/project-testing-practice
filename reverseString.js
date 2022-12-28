export default function reverseString(input) {
    if(typeof input == 'number') {
        throw new Error('Must be a string!');
    }

    let newString = '';
    
    for(let i = input.length; i >= 0; i--) {
        newString += input[i];
    }

    return newString;
}