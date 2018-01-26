const Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayPerson = function () {
        console.log("Name:"+this.name+" Age:"+this.age+" Job:"+this.job);
    };
};
const person1 = new Person("Arrow", 35, "Hero");
const person2 = new Person("Flash", 25, "SuperHero");

person1.sayPerson();
person2.sayPerson();

console.log(person1.constructor == Person); //true
console.log(person2.constructor == Person); //true

console.log(person1 instanceof Object); //true
console.log(person1 instanceof Person); //true
console.log(person2 instanceof Object); //true
console.log(person2 instanceof Person); //true

const o = new Object();
Person.call(o, "superMan", 28, "manHero");
o.sayPerson(); //Name:superMan Age:28 Job:manHero