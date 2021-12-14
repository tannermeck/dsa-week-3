class Dequeue {
    #shift = []
    #list = []
    enqueue(item) {
        return this.#list.push(item)
    }
    dequeue(){
        if (this.#list.length){
            const firstItem = this.#list[this.#shift.length]
            this.#shift.push(firstItem)
            return firstItem;
        } else return null;
        //#index = 0;
        // const item = list[this.#index]
        //this.#index++
        //return item
    }
}
// enqueue()
// shift []
// list['bob', 'sal', 'jess']

// dequeue()
// shift ['bob']
// list['bob', 'sal', 'jess']

//dequeue()
// shift ['bob', 'sal']
// list ['bob', 'sal', 'jess']
