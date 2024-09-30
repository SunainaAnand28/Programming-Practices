function createQueue() {
    let items = []; 

    return {
       
        enqueue: function(element) {
            items.push(element);
        },

     
        dequeue: function() {
            if (this.isEmpty()) {
                return null; 
            }
            return items.shift();
        },

       
        front: function() {
            if (this.isEmpty()) {
                return null; 
            }
            return items[0];
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

// Example usage
const queue = createQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front element:", queue.front()); 
queue.print(); 
console.log("Dequeued element:", queue.dequeue()); 
queue.print();
console.log("Is queue empty?", queue.isEmpty()); 
console.log("Queue size:", queue.size()); 