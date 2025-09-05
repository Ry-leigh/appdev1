const person = {
    name: "Ryan",
    age: 20
};

const { name, age } = person;
console.log(name);
console.log(age);

const hobbies = ["Drawing", "Sleeping"];
const [x, y] = hobbies;
console.log(x);
console.log(y);

function printName(person) {
    console.log(person.name);
}
printName(person)