// Name Tuples: It allow us to provide the context to our value at each index.

let graph: [x: number, x: number] = [23, 25.5];

let person: [firstName: string, lastName: string] = ['Amir', 'Hussain'];
console.log(person);

// Destructuring Tuples

let names: [string, string] = ['Apple', 'Mango'];
let [fruit1, fruit2] = names;

console.log(names);
