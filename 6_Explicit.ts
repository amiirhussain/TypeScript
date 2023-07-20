// Explicit typing: The type is explicitly declared by the programmer.
// Explicit type assignment are easier to read and more intentional.

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet('Amir', new Date());
