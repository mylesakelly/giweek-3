// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"



function cutPizzaSlices(totalSlices) {
    return function(numPeople) {
    //closure function    
      return `Each person gets ${(totalSlices / numPeople).toFixed(2)} slices of pizza`; 
      //function will return totalSlices function / numPeople function and the give the result with 2 decimal places using the toFixed() method
    }
  }
const sharePizza = cutPizzaSlices(8); 
//total amount of slices on the pizza
console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"