// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const mapA = buildCharMap(stringA);
//     const mapB = buildCharMap(stringB);

//     let areMapsEqual = true;
    
//     // check length 
//     if( Object.keys(mapA).length !== Object.keys(mapB).length) {
//         return false;
//     }

//     // check props
//     for (const char in mapA) {
//         if(mapA[char] !== mapB[char]) {
//             return false;
//         }
//     }

//     return true;
// } 

// function buildCharMap(str) {
//     const formatedStr = str.replace(/[^\w]/g, '').toLowerCase();
    
//     let charMap = {};
    
//     for (const char of formatedStr) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }


function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function anagrams(stringA, stringB) { 
    return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
