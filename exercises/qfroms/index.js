// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    add(record) {
        this.stackA.push(record);
    }

    remove() {
        return this.getQueueVal(this.stackA, this.stackB, 'remove');
    }

    getQueueVal(a, b, type) {
        let result = null;
        
        //switch stacks
        while(a.peek()) {
            b.push(a.pop());
        }

        if(type) {
            result = b.pop();
        } else {
            result = b.peek();
        }

        //restore stacks
        while(b.peek()) {
            a.push(b.pop());
        }
        
        return result;
    }

    peek() {
        return this.getQueueVal(this.stackA, this.stackB);
    }
}

module.exports = Queue;
