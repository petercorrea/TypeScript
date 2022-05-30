// "this" keyword:
//      implicit - the object adjacent to the method being accessed by "."
//      explicit -  method.call(obj, arg, arg) method contains "this" keyword
//                  method.apply(obj, [args])
//                  method.bind(obj) returns a function
//      new      -  this points to the newly created object
//      global context - global object
//      HTMLEventElement - binds to the element that received the event

// Inheritance, Polymorphism, Abstraction, Encapsulation

// SOLID:
//      - single responsibility: clearer purpose leads to greater determinism
//      - open to extension closed to modification: be able to provide functionality without implementing inner mechanics
//      - Liskov's sub: any subclass can sub in for its parent class
//      - interface segregation: the client doesn't have to worry about writing implementation
//              nor depend on methods they dont use
//       = dependency inversion: passing a function as an argument to provide desired behavior
//               helps to enforce decoupling

// Composition over Inheritance

// Extension via Merging
interface APIcall {
  data: Response;
}

interface APIcall {
  error?: Error;
}

// Class Conformance
interface Syncable {
  sync(): void;
}

class BackendAPI implements Syncable {
  backendSyn() {
    return;
  }

  sync() {
    return;
  }
}

// Overloads
interface Expect {
  (matcher: boolean): string;
  (matcher: string): boolean;
}

// Getter and Setter
interface Ruler {
  get size(): number;
  set size(value: number);
}

// Public, Private, Readonly
interface TeamLead {
  lead: boolean;
  assignsWork: () => {};
}

class Employee {
  role = "Employee";
  logHours() {}
}

class Engineer extends Employee implements TeamLead {
  // constructor
  displayname?: string;

  constructor(public name: string = "avatar") {
    super();
    this.displayname = name;
  }

  // fields, properties, interface implementation
  lead = true;
  count: number = 10;
  id: number = 12;
  nickname!: string;
  roles = ["admin"];
  #attributes: string = "person";
  readonly secret: string = "secret";
  private somePrivate: string = "peter";
  protected someProtected: string = "protected";
  static someStatic: string = "static";

  // Getters and Setters
  get size() {
    return 10;
  }
  set size(value: number) {}

  // methods
  assignsWork(): {} {
    return {};
  }

  formatter(): string {
    return `${this.nickname} owes ${this.secret}, the details are ${this.lead}`;
  }
}
