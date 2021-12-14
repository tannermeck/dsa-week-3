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


  const stack = new Stack();

  stack.push('ted');
  stack.push('tracy');
  stack.push('hailey');

  stack.pop()
  
  console.log(stack.peek())

  
