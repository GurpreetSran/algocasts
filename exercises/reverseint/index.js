// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let isNeagtive;
//     let str = String(n);
//     if (n < 0) {
//         // Number is negative 
//         str = String(n).slice(1);
//         isNeagtive = true;
//     }

//     const reversed = str.split('').reverse().join('');

//     if (isNeagtive) {
//         return Number(-reversed);
//     }

//     return Number(reversed);
// }


function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
