function createPerson(name, age, job) {
    const obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.job = job;
    obj.sayPerson = function(){
        console.log("Name:"+this.name+" Age:"+this.age+" Job:"+this.job);
    };
    return obj;
}
const person1 = createPerson("Arrow", 35, "hero");
const person2 = createPerson("Flash", 25, "superHero");

person1.sayPerson();
person2.sayPerson();