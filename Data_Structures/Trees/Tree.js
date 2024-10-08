class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
 
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    inOrder(node = this.root) {
      if (node) {
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
      }
    }
  }
  
  // Example Usage:
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(20);
  bst.insert(3);
  bst.insert(7);
  
  bst.inOrder(); 
  