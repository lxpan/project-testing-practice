export default function capitalize(input) {
    if(typeof input == 'string') {
        const newString = input.charAt(0).toUpperCase();
        return newString + input.slice(1);
    } else {
        throw new Error('Only strings accepted!');
    }
    
}
