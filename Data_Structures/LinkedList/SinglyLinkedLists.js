class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Add a new node to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    // Remove a node from the end of the list
    pop() {
      if (!this.head) return undefined;
  
      let current = this.head;
      let newTail = current;
  
      while (current.next) {
        newTail = current;
        current = current.next;
      }
  
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
  
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
  
      return current;
    }
  
    // Print the values in the list
    print() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values);
    }
  }
  
  // Example usage
  const list = new SinglyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.print(); // Output: [1, 2, 3]
  list.pop();
  list.print(); // Output: [1, 2]
  