// function parameter and return values has specific syntax in TypeScript.

function addnumber(a, b): number {
  // the `: number` here specifies that this function returns a number
  return a + b;
}

addnumber(2, 5);

//the : void here specifies that this function doesn't return any value
function greet(): void {
  console.log('Hello World!');
}

// function parameters
function multi(num1: number, num2: number) {
  return num1 * num2;
}

multi(5, 7);
