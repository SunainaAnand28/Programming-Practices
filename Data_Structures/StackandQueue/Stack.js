function createStack() {
    let items = []; 

    return {
      
        push: function(element) {
            items.push(element);
        },

      
        pop: function() {
            if (this.isEmpty()) {
                return null;
            }
            return items.pop();
        },

       
        peek: function() {
            if (this.isEmpty()) {
                return null;
            }
            return items[items.length - 1];
        },

        isEmpty: function() {
            return items.length === 0;
        },

        size: function() {
            return items.length;
        },

        print: function() {
            console.log(items.join(' '));
        }
    };
}

// Example
const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek()); 
stack.print();
console.log("Popped element:", stack.pop());
stack.print(); 
console.log("Is stack empty?", stack.isEmpty());
console.log("Stack size:", stack.size());
