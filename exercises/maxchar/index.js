// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const counter = str.split('').reduce((count, char) => {
//         if(count[char]) {
//             count[char] = count[char] + 1;
//             return count
//         }
//         count[char] = 1;
//         return count;
//     },[]);

//     const sorted = Object.values(counter).sort((a, b) => b - a);

//     return Object.keys(counter).find((item) =>  counter[item] === sorted[0]);
// }


function maxChar(str) {
    
    const charMap = {};

    let maxValue = 0;
    let key;

    for (let char of str) {
        
        if(charMap[char]) {
            charMap[char] ++;     
        }
        
        charMap[char] = 1;
    }

    for (let char in charMap) {
        
        if(charMap[char] > maxValue) {
            maxValue = charMap[char];
            key = char;
        }
    }

    return key;

}




module.exports = maxChar;
