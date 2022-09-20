// #1
class Stack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list[this.list.length - 1];
    // return this.list.at(-1);
  }
}

// #2
class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(item) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }

  hasNext() {
    return !!this.list.length;
  }
}

//#2 & #5 dequeque refactor
class Queue {
  constructor() {
    this.list = [];
    this.index = 0;
  }

  enqueue(item) {
    this.list.push(item);
  }

  dequeue() {
    return this.list[this.index++];
  }

  hasNext() {
    return this.list.length - index;
  }
}

// #3
const opens = { '(': ')', '{': '}' };
const closes = { ')': '(', '}': '{' };

function checkSyntax(code) {
  const stack = new Stack();

  for (let char of code) {
    if (opens[char]) stack.push(char);
    else if (closes[char]) {
      if (stack.pop() !== closes[char]) return false;
    }
  }

  return !stack.peek();
}

// #4
// [12, 3, 5, 7] --> [7, 5, 3, 12]
function reverse(array) {
  const stack = new Stack();

  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results[i] = stack.pop();
  }

  return results;
}
