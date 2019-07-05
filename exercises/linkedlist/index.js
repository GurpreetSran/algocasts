// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter ++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }
        
        let node = this.head;
        
        while(node.next) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return null;
        }
        
        this.head = this.head.next;
    }

    removeLast() {

        // Empty 
        if(!this.head) {
            return null;
        }

        //Only one node 
        if(!this.head.next) {            
            this.head = null;
            return null;
        }

        let node = this.head;
        let prevNode = null;

        while(node.next) {
            prevNode = node;
            node = node.next;
        }

        prevNode.next = null;
    }

    insertLast(data) {
        const node = this.getLast();
        
        if(node) {
            node.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        if(!this.head || index > this.size()){
            return null;
        }

        let node = this.head;
        let counter = 0;

        while(counter < index) {
            counter++;
            node = node.next;
        }

        return node;
    }

    removeAt(index) {
        if(!this.head) {
            return null;
        }

        if(index === 0) {
            this.head = this.head.next;
            return null;
        }

        const prevNode = this.getAt(index - 1);
        const nextNode = this.getAt(index + 1)
       
        prevNode.next = nextNode;
    }

    insertAt(data, index) {
        
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
        
        if(index === 0) {
            this.head = new Node(data, this.head);
            return
        }
    
        const prevNode = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while(node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }


    //Todo forEach loop
}

module.exports = { Node, LinkedList };
