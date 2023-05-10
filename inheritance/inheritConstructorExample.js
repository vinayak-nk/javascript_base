
function User(name, pwd) {
  this.name = name
  this.password = pwd
}

User.prototype.printName = function() {
  console.log(this.name)
}


function Admin(user, pwd, xyz) {
  User.call(this, user, pwd)
  this.x = xyz
}

Admin.prototype = Object.create(User.prototype)

vk = new Admin('vk', 'vnk', 'test')

vk.printName()