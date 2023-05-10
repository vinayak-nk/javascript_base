/*
1. JavaScript engine adds a __proto__ property to the newly created object 
2. We should never create a function inside of a constructor function. Because every time an instance is created, 
  a new function is created with it which we created inside the constructor function. This will create major issues for performance.

*/


// Example 1
/*
function Bike(model,color){
  this.model = model,
  this.color = color
}

Bike.prototype.getDetails = function(){
 return this.model+" bike is "+this.color;
}


var bikeObj1 = new Bike('BMW','Black');
var bikeObj2 = new Bike('BMW','white');
console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
console.log(bikeObj1,bikeObj2) // attacheced below image as output

console.log(bikeObj1.__proto__ === Bike.prototype );
*/

// Example 2: Protype inheritance using constructor functions
/*
function User(name){
  this.name = name;

  // never create function inside constructor function
  this.print = function(){
      console.log('name', this.name);
  }  
  console.log('this', this);
}

User.prototype.printName = function(){
  console.log('name prototype', this.name);
}  
User.prototype.species = "Homo Sapiens"

let vk = new User("vk")
console.log('this2', vk)
console.log('proto', vk.__proto__ === User.prototype)
console.log('proto', vk.__proto__)

vk.printName()

const arr = [1,2,3,4,5]
console.log(arr.__proto__)

*/

// Example 3: Protype inheritance using ES6 Classes

class User{
	constructor(name){
    	this.name = name
    }
    
    printName(){
        console.log(this.name);
    }
}

const vk = new User("vk")
vk.printName()



