// Interfaces are similar to type aliases, except they only apply to object types.

// Interfaces are a powerful tool for defining the structure of objects and providing a blueprint for classes to implement.

// They allow you to specify the shape of an object, including the names and types of its properties and methods,

// without providing an actual implementation.

interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'Amir',
  lastName: 'Hussain',
};
