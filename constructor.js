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