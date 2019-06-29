// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i) + ' '.repeat(n-i))
//     }   
// }

function steps(n) {
    printSteps(n);
}

function printSteps(n, row = 0, step = '') {
    if(n===row) {
        return;
    }

    if(n === step.length) {
        console.log(step);
        return printSteps(n, row + 1);
    }
    

    if(step.length <= row) {
        step += '#';    
    } else {
        step += ' ';
    }
    
    printSteps(n, row, step);
}

module.exports = steps;
