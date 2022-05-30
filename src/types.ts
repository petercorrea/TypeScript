// Primitives:
// string, number, boolean, undefined, null, any, unknown, never, void, bigint, symbol

// Objects:
// Array, Map, Set, Promise, Error, Date, Regexp,

let someString: string = "Luigi";
let someNumber: number = 21;
let someBool: boolean = true;
let someArray: Array<number> = [1, 2, 3];
let someArray2: number[] = [1, 2, 3];

// Object Literal
let someObject: { firstName: string; lastName: string } = {
  firstName: "Peter",
  lastName: "Correa",
};

// Record Type
let names = {
  peter: 30,
  pedro: 29,
};

// Tuples
let tuple: [x: number, y: string] = [1, "2"];

// Enums
enum Role {
  ADMIN,
  GUEST,
  BLOCKED,
}

// Any Type
let anyType: any;
anyType = "Peter";
anyType = 23;

// Unions
type NumOrString = number | string;
type Options = "number" | "string";

// Intersections
type CoordinatePoints = { x: number } & { y: number };

// Type Indexing
type EventResponse = {
  data: string;
};
type Data = EventResponse["data"];

// Type from Value
const data = { text: "text", count: 23 };

type Child = typeof data;

// Type from Func Return
const someFunc = () => {
  return {
    text: "string",
    description: "string",
  };
};

type Fixtures = ReturnType<typeof someFunc>;

function test(fixture: Fixtures) {}

// Template Union Type
type States = "FL" | "CO" | "NY";
type Cities = "Miami" | "CO" | "NY";

// Conditional Types
type Boat = {
  hasWheels: false;
};

type Plane = {
  hasWheels: true;
};

type Car = {
  hasWheels: true;
};

type Vehicles = Boat | Plane | Car;

type HasWheels<Vehicle> = Vehicle extends { hasWheels: true } ? Vehicle : never;

type GotWheels = HasWheels<Vehicles>;

// Mapped Types
type Room = {
  size: number;
  style: "Living" | "Bedroom" | "Garage";
};

type AnotherRoom<Type> = {
  [Property in keyof Type]: (newValue: Type[Property]) => void;
};

type AnotherRoomSub = AnotherRoom<Room>;
