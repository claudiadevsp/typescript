class Queue<T extends number | string> {

    private queue: Array<T>    

    constructor(...args: T[]) {
        this.queue = args
    }

    enter(element: T) {
        this.queue.push(element)
    }
    next(): T | null {
        if (this.queue.length >= 0 && this.queue[0]) {
            const first = this.queue[0]
            this.queue.splice(0, 1)
            return first
        } 
        return null       
    }
    print() {
        console.log(this.queue)
    }
}

const queue = new Queue<string>('Teste', 'Teste2', 'Teste3')

queue.print()
queue.enter('Teste4')
queue.print()
console.log(queue.next())
console.log(queue.next())
queue.print()

const newQueue  = new Queue<number>(1,2,3)
queue.print()
