/*
function Bike(model,color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getInfo = function() {
  return this.color + ' ' + this.model+ ' bike';
};

*/

class Bike{
  constructor(color, model) {
    this.color= color;
    this.model= model;
  }
}

obj1 = Bike('red', 'bmw')