class Stack {
    #list = [];
  
    push(item) {
      this.#list.push(item)
    }
  
    pop() {
      return this.#list.pop()
    }
  
    peek() {
      const arrLength = this.#list.length - 1
      return this.#list[arrLength]
    }
  
    get size() {
      //implement me
    }
  }
  const stack = new Stack;
  const add = stack.push('ted');
  console.log(add)
  export default Stack;