// Type Aliases allow defining types with a custom name (an Alias).

type PersonName = string;
type PersonAge = number;
type PersonAdd = string;

type Person = {
  name: PersonName;
  age: PersonAge;
  add: PersonAdd;
};

const personName: PersonName = 'Amir';
const personAge: PersonAge = 22;
const personAdd: PersonAdd = 'Islamabad';

const individual: Person = {
  name: personName,
  age: personAge,
  add: personAdd,
};

console.log(individual);
