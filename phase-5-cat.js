// Your code here
class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
}
Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};
let cat1 = new Cat("Markov", "Ned");
cat1.meow = function () {
  return "meow";
};
console.log(cat1.cuteStatement());
console.log(cat1.meow());
