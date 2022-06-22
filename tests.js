export function testEvery() {
  console.log(
    "every",
    array.everyCus((x) => typeof x === "number")
  );
  console.log(
    "every",
    array.everyCus((x) => typeof x !== "number")
  );
  console.log(
    "every",
    array.everyCus((x) => x > 2)
  );
}
export function testSome() {
  console.log(
    "some",
    array.someCus((x) => typeof x === "number")
  );
  console.log(
    "some",
    array.someCus((x) => typeof x !== "number")
  );
  console.log(
    "some",
    array.someCus((x) => x > 2)
  );
  console.log(
    "some",
    array.someCus((x) => x > 40)
  );
}
