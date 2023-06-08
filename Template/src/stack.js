import LinkedListNode from './linked-list-node.js';

export default class Stack {
    #top = null;
    #isEmpty;
    #count = 0;

    push(value) {
        this.#top = new LinkedListNode(value, this.#top);
        this.#count++;
    }

    pop() {
        if(this.#isEmpty) {
            throw new Error('Stack is empty!');
        }
        
        const dummyValue = this.#top.value;
        this.#top = this.#top.next;
        this.#count--;

        return dummyValue;

    }

    peek() {
        if(this.#isEmpty) {
            throw new Error('Stack is empty!');
        }
        
        return this.#top.value;
    }

    get isEmpty() {
        return !this.#top;
    }

    get count() {
        return this.#count;
    }
}

const dummyStack = new Stack();

dummyStack.push(5);

dummyStack.push(3);

dummyStack.push(7);

dummyStack.pop();

console.log(dummyStack.isEmpty);