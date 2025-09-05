import greet, { myInformation } from './15_modules_export.js';

console.log(greet());

console.log(`Name: ${myInformation.lastName}, ${myInformation.firstName}`);
console.log(`Age: ${myInformation.age}`);
console.log(`Birthday: ${myInformation.birthday}`);
console.log(`Program: ${myInformation.program}`);
console.log(`Year Level: ${myInformation.yearLevel}`);
