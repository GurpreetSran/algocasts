// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let fseries = [0, 1];
    
//     for (let i = fseries.length; i <= n; i++ ) {
//         let a = fseries[fseries.length - 1];
//         let b = fseries[fseries.length - 2];

//         fseries.push(a + b);
//     }
//     return fseries[fseries.length -1];
// }

function memoize(fn) {
    let cache = {};
    return (...args) => {
        if(cache[args]) {
            return cache[args];
        }
        
        result = fn(...args);
        cache[args] = result;
        return result;
    }
}

function slowFib(n) {
    if(n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
