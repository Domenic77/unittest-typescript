import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three by four is twelve", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide twelve by four is three", () => {
  // Arrange
  const a: number = 12;
  const b: number = 4;
  const expected: number = 3;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

// Neuer Testfall für Division durch 0 (jetzt erwartet er einen Fehler)
test("divide by zero throws an error", () => {
  // Arrange
  const a: number = 12;
  const b: number = 0;

  // Act & Assert
  expect(() => divide(a, b)).toThrowError("Division by zero is not allowed");
});
