// Mapped Types
// used to reduce repetitive writing
type Properties = "propA" | "propB" | "propC";
type MappedType = {
  [P in Properties]: boolean;
};

type MappedGeneric<T extends string | number | symbol> = {
  [P in T]: P;
};
type fromGeneric = MappedGeneric<Properties>;

type MappedGenericKeys<T> = {
  [P in keyof T]: T[P];
};
type fromGenericKeys = MappedGenericKeys<{
  propA: "a";
  propB: "b";
}>;

// Certain types in TS are created using Mapped types e.g. Pick and Record types
type Picker<T, Props extends keyof T> = {
  [P in Props]: T[P];
};
type MyPicks = Picker<{ propA: "a"; propB: "b"; propC: "c" }, "propC">;
