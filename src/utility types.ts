type Sizes = "SMALL" | "MEDIUM" | "LARGE";
type Prices = 5.99 | 7.99 | 9.99;
type Flavors = "Vanilla" | "Chocolate" | "Strawberry" | "Cherry" | "Orange";
type Toppings = "Sprinkles" | "Whipped Cream" | "Cherry";
type Inclusions = "Orange" | "Kiwi" | "Gummies" | "Marshmello" | "Candy Bar";
type Nulls = "None" | null | undefined;
type IceCream = {
  flavor: Flavors;
  size: Sizes;
  addons?: Addons;
  price: Prices;
};
type Addons = {
  flavors: Flavors;
  toppings: Toppings;
  inclusions: Inclusions;
  cone: boolean;
  sharable: boolean;
};

const sampleOrder = () => {
  return {
    firstName: "Jane",
    lastName: "Doe",
    icecream: {
      flavor: "Vanilla",
      size: "SMALL",
      price: 5.99,
    },
  };
};

class Customer {
  firstname;
  lastname;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const someCustomer = new Customer("Peter", "Correa");

type SomeObject = {
  sayHello(): string;
};

type ThisObject = {
  helloWorld(): string;
};

// Optionals
type MyPartial = Partial<Addons>;

// Required
type MyRequired = Required<IceCream>;

// Readonly
type MyReadOnly = Readonly<Prices>;

// Record
type MyRecord = Record<string, number>;

// Pick
type MySimple = Pick<Addons, "flavors" | "cone">;

// Omit
type MyNoAddons = Omit<IceCream, "addons">;

// Extract (Union types only)
type ILike = Extract<Flavors, "Vanilla">;

// Exclude (Union types only)
type IDislike = Exclude<Flavors, "Vanilla" | "Chocolate">;

// NonNullable
type Nonnullable = NonNullable<Nulls>;

// Return
type Sample = ReturnType<typeof sampleOrder>;

// Instance
type MyCustomer = InstanceType<typeof Customer>;

// This
const myObject: SomeObject & ThisType<ThisObject> = {
  sayHello() {
    return this.helloWorld();
  },
};
