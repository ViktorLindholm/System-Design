function MenuItem(name, kCal, gluten, lactose) {
  this.name = name;
  this.kCal = kCal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.getBurgerInfo = function() {
    return this.name + " " + this.kCal;
  };
}

var burger = new MenuItem('Hot MF', '180 kcal', 'Contains gluten', 'no lactose');

console.log(burger.getBurgerInfo());

