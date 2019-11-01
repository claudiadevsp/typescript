"use strict";
class Queue {
    constructor(...args) {
        this.queue = args;
    }
    enter(element) {
        this.queue.push(element);
    }
    next() {
        if (this.queue.length >= 0 && this.queue[0]) {
            const first = this.queue[0];
            this.queue.splice(0, 1);
            return first;
        }
        return null;
    }
    print() {
        console.log(this.queue);
    }
}
const queue = new Queue('Teste', 'Teste2', 'Teste3');
queue.print();
queue.enter('Teste4');
queue.print();
console.log(queue.next());
console.log(queue.next());
queue.print();
const newQueue = new Queue(1, 2, 3);
queue.print();
