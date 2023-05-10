/*

Static methods are bound to a class and not to the instances of class or object of the class. 
We can access static methods through classes only and not through the object of that class.

*/

class User{
	constructor(name){
    	this._name = name
    }

    static anonymous(){
        console.log("anonymous");
    }
}

const vk = new User("vk")
// vk.anonymous() // error
User.anonymous() // "anonymous"


const User2 = {
  printName(){
    console.log(this.name);
  }
}

let properties = {
  name: {
    value:"xyz"
  }
}

let xyz = Object.create(User2, properties)
xyz.printName()