const aboutMe = {
    name: "Ryan",
    age: 20,
    course: "Information Systems",

    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

aboutMe.introduce();
aboutMe.hobby = "Drawing";
console.log(aboutMe.hobby)