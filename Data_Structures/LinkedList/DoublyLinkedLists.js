class DoublyNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Add a new node to the end of the list
    append(value) {
      const newNode = new DoublyNode(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    // Remove a node from the end of the list
    pop() {
      if (!this.tail) return undefined;
  
      const poppedNode = this.tail;
  
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
  
      this.length--;
      return poppedNode;
    }
  
    // Print the values in the list from start to end
    printForward() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values);
    }
  
    // Print the values in the list from end to start
    printBackward() {
      let current = this.tail;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.prev;
      }
      console.log(values);
    }
  }
  
  // Example usage
  const doublyList = new DoublyLinkedList();
  doublyList.append(1);
  doublyList.append(2);
  doublyList.append(3);
  doublyList.printForward(); // Output: [1, 2, 3]
  doublyList.printBackward(); // Output: [3, 2, 1]
  doublyList.pop();
  doublyList.printForward(); // Output: [1, 2]
  