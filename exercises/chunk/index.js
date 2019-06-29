// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
    
//     finalArray = [];
		
//     while(array.length >= size) {
//     	var chunk = [];
//     	for(let i = 0; i < size; i ++) {
//         	chunk.push(array.shift());
//     	}
      
//       finalArray.push(chunk);
//     }
		
//     if(array.length > 0) {
// 	    finalArray.push(array)
//     }
    
//     return finalArray;
// }

// Splice vs slice 
// Shift unshift 

// try to understand it. 

// function chunk(array, size) { 
//     const chunksWrapper = [];
    
//     for(const element of array) {
//         const lastChunk = chunksWrapper[chunksWrapper.length - 1];

//         if(!lastChunk || lastChunk.length === size) {
//             chunksWrapper.push([element]);
//         }else {
//            lastChunk.push(element);
//         }
//     }

//     return chunksWrapper;
// }

function chunk(array, size) { 
    let index = 0;
    const chunkWrapper = [];
    
    while(index < array.length) {
        let elements = array.slice(index, index + size);
        chunkWrapper.push(elements);
        index += size;
    }

    return chunkWrapper;
}

module.exports = chunk;