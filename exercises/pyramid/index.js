// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {    	
    let x = '';  
   	
   	for(let col = 0; col < n; col ++) {
        x = '';
        for(let row = 0; row < (n + n) - 1; row++) {
            x += 'x'
        }
        console.log(x);
    }
}

pyramid(3)

module.exports = pyramid;
