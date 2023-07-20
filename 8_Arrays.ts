// TypeScript has a specific syntax for typing arrays.

let names: string[] = ['Apple', 'Mango'];
names.push('Banana');

console.log(names[2]);

let cars: readonly string[] = ['Civic', 'Mehran'];
cars.push('Hondai'); // Error: Property 'push' does not exist on type 'readonly string[]'.
