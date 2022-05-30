// Indexed Access Type
// Used to look up a type of a specific property
type Person = {
  age: number;
  name: string;
  adult: boolean;
};
type Age = Person["age"];

// Example with array elements
const myArray = [
  { name: "peter", age: 26 },
  { name: "pedro", age: 27 },
  { name: "michael", age: 28 },
];

type Identities = typeof myArray[number];
type Name = typeof myArray[number]["name"];
