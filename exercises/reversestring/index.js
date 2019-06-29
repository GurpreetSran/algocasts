// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const splitArr = str.split('');    
//     let reversed = '';    

//     for(let i = 0; i < splitArr.length; i++) {
//         reversed = splitArr[i] + reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//     let reversed = '';    
//     for(let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
