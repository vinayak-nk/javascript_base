class User {
  constructor(name, pwd) {
    this.name = name
    this.password = pwd
  }

  printName(){
    console.log("name.....", this.name)
  }
}

class Admin extends User {
  constructor(name, pwd, test){
    super(name, pwd)
    this.x = test
  }
}


class Admin2 extends User {
  constructor(name, pwd, test){
    super(name, pwd)
    this.x = test
  }
  
  printName(){
    console.log("OVERRIDE: admin name.....", this.name)
  }
}


let user = new User("vk", 'test')
let adminUser = new Admin("vk admin", 'test', '123')
let adminUser2 = new Admin2("vk admin2", 'test', '123')

user.printName()
adminUser.printName()
adminUser2.printName()