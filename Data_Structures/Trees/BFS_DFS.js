class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left); 
        console.log(node.value); 
        this.inOrder(node.right); 
      }
    }

    preOrder(node) {
      if (node !== null) {
        console.log(node.value); 
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }

    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
      }
    }
  
    // Level-order (BFS) Traversal
    levelOrder() {
      const queue = [];
      if (this.root) queue.push(this.root);
  
      while (queue.length) {
        const currentNode = queue.shift();
        console.log(currentNode.value);
  
  
        if (currentNode.left) queue.push(currentNode.left);
 
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
  }
  
  // Example Usage:
  const tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(6);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(8);
  tree.root.right.right = new Node(20);
  
  // Traversing the tree
  console.log("In-order Traversal:");
  tree.inOrder(tree.root);
  
  console.log("Pre-order Traversal:");
  tree.preOrder(tree.root);
  
  console.log("Post-order Traversal:");
  tree.postOrder(tree.root);
  
  console.log("Level-order Traversal (BFS):");
  tree.levelOrder();    
  