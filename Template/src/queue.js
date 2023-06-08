import LinkedListNode from './linked-list-node.js';

export default class Queue {
    #head = null;
    #tail = null;
    #count = 0;

    enqueue(value) {
        const newNode = new LinkedListNode(value, null);
        if (!this.#head) {
            this.#head = newNode;
        } else {
            this.#tail.next = newNode;
        }

        this.#tail = newNode;
        this.#count++;

    }

    dequeue() {
        if(!this.#head) {
            throw new Error('Empty queue');
        }

        const dummyValue = this.#head.value;
        this.#head = this.#head.next;
        this.#count--;

        return dummyValue;
    }

    peek() {
        return this.#head.value;
    }

    get isEmpty() {
        return !this.#count;
    }

    get count(){
        return this.#count;
    }
}

const dummyQueue = new Queue();

dummyQueue.enqueue(5);
dummyQueue.enqueue(3);
dummyQueue.enqueue(7);
dummyQueue.enqueue(8);