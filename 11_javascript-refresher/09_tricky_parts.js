console.log(5 == "5");
console.log(5 === "5");

let a;
let b = null;

console.log(a);
console.log(b);

const student = {
    name: "Ryan",

    normalFunction: function() {
        console.log("Function-function:", this.name);
    },

    arrowFunction: () => {
        console.log("Arrow-function:", this.name);
    }
};

student.normalFunction();
student.arrowFunction();

const cats = ["Persian", "Siamese", "British Shorthair"];
const moreCats = cats;
moreCats.push("Munchkin");

console.log(cats);
console.log(moreCats);

const patterns = ["Tabby", "Calico", "Orange"];
const morePatterns = [...patterns];
morePatterns.push("Tuxedo");

console.log(patterns);
console.log(morePatterns);
