const numbers = [1, 2, 3];
const clonedNumbers = [...numbers];
const moreNumbers = [...numbers, 4, 5];
console.log(clonedNumbers, moreNumbers);

const user = { name: "Ryan", age: 20 };
const cloneduser = { ...user };
const userPlus = { ...user, hobby: "Drawing" };
console.log(cloneduser, userPlus);

function sumAll(...numbers) {
    let x = 0;
    for(n of numbers) {
        x = x + n
    };
    return x;
}
console.log(sumAll(1, 2, 3, 4));
