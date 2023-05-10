/*
We can create objects from a function. With the help of a constructor function, built-in objects like 
arrays, sets, and others are actually implemented.

In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose 
of a constructor is to create a new object and set its values for any existing object properties

*/

function Bike(model,color){
  this.model = model,
  this.color = color,
  
  this.getDetails = function(){
    return this.model+' bike is '+this.color;
  }

}

var bikeObj1 = new Bike('BMW','BLACK');
var bikeObj2 = new Bike('BMW','WHITE');

console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
console.log(bikeObj1,bikeObj2) //attacheced below image as output