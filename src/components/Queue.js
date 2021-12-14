class Queue {
    #list = []

    enqueue(item){
        return this.#list.push(item)
    }
    dequeue() {
        const list = this.#list
        return list.length ? this.#list.shift() : null;
    }
    hasNext(){
        const length = this.#list.length
        return length ? true : false;
    }
}