function greet(name) {
    return "Hello, " + name + "!";
}

function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function calculator(a, b) {
    console.log("Sum:", add(a, b))
    console.log("Product:", multiply(a, b))
}

const square = (num) => num * num;

console.log(greet("Ryan"));
console.log(square(5));
calculator(5, 5)