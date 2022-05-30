// Union Types
function printer(num1: string | number) {
  console.log(num1);
}

function someFunction(a: number, b: string = "default"): number {
  return a;
}

function voidFunction(num1: number): void {
  return;
}

// Function Overloading
interface Coordinate {
  x: number;
  y: number;
}

function overload(arg1: string): Coordinate;
function overload(obj: Coordinate): Coordinate;
function overload(x: number, y: number): Coordinate;
function overload(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    let args = arg1.split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as keyof Coordinate] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}
