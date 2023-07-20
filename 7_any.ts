// any : it is a type that disables type checking and effectively allows all types to be used.

let isFalse = true;
isFalse = 'string'; // error -> type string is not assignable to type "boolean"
Math.round(isFalse); // eror: argument of type 'boolean' is not assignable to parameter of type 'number'.

let isTrue: any = true;
isTrue = 'string';
Math.round(isTrue);
