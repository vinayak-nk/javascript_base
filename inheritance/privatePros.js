/*

To implement a truly private property in JavaScript we have to use (#) before the property name or method. 
These private properties and methods will not be accessible from outside of class which will make them truly private.

This will help restrict accessing properties from outside of the class. If we want to access property 
from outside we have to make method which will only print properties without giving access to change
value of that property.
*/

class User{
  #name

  constructor(name, password){
      this.#name = name
      this._password = password
  }
  
  #printName(){
      console.log(this.#name);
  }

  PrintFromPrivateMethod(){
      this.#printName()
      console.log('name', this.#name)
  }
}

const vk = new User("vk", 123456)
vk.PrintFromPrivateMethod()
