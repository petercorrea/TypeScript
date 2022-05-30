// Generics allow us to reuse blocks of code with different types
interface IsAnimal<T> {
  name: string;
  age: number;
  data: T;
}

let Dog: IsAnimal<string> = {
  name: "Charlie",
  age: 2,
  data: "some text",
};

let Cat: IsAnimal<string[]> = {
  name: "Olive",
  age: 3,
  data: ["text", "text"],
};
