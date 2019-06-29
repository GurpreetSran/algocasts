// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     return str.split(' ').map(word => {
//         // index = 0;
//         // processed = '';
        
//         // for(const char of word) {
//         //     if(index === 0) {
//         //         processed = char.toUpperCase();
//         //         index ++;
//         //     } else {
//         //         processed += char;
//         //     }
//         // }    

//         // return processed;

//         return word[0].toUpperCase() + word.slice(1);
//     }).join(' ');
// }

function capitalize(str) { 
    // let finalStr = '';
    
    // let index = 0
    // for(const char of str) {
    //     if(index === 0) {
    //         finalStr = char.toUpperCase();
    //     } else {
    //         if(str[index - 1] === ' ') {
    //             finalStr += char.toUpperCase();
    //         } else {
    //             finalStr += char;
    //         }
    //     }       

    //     index++;
    // }

    let processedString = str[0].toUpperCase();

    for(let i = 1; i < str.length; i ++) {
        
        if (str[i - 1] === ' ') {
            processedString += str[i].toUpperCase();
        } else {
            processedString += str[i];
        }
    }

    return processedString;
}

module.exports = capitalize;
