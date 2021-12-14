class Stack {
    #list = [];
  
    push(item) {
      this.#list.push(item)
    }
  
    pop() {
      return this.#list.length ? this.#list.pop() : null;
    }
  
    peek() {
      //or return this.#list.at(-1)
      const arrLength = this.#list.length - 1
      return this.#list.length ? this.#list[arrLength] : null;
    }
  
    get size() {
      return this.#list.length;
    }
  }
  const stack = new Stack;
  const add = stack.push('ted');
  console.log(add)
  export default Stack;