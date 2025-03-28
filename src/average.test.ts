import { median } from "./average";

// Test für den Median einer Zahlenreihe mit ungerader Anzahl von Zahlen
test("test median for odd number of elements", () => {
  const numbers: number[] = [1, 2, 6, 7, 8, 9, 10];
  
  // Randomisieren der Reihenfolge der Zahlen
  numbers.sort(() => Math.random() - 0.5); // Zufällige Reihenfolge

  const expected: number = 7; // Erwarteter Median nach Sortierung

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

// Test für den Median einer Zahlenreihe mit gerade Anzahl von Zahlen
test("test median for even number of elements", () => {
  const numbers: number[] = [1, 2, 5, 6, 7, 8, 10, 11];
  
  // Randomisieren der Reihenfolge der Zahlen
  numbers.sort(() => Math.random() - 0.5); // Zufällige Reihenfolge

  const expected: number = 6.5; // Erwarteter Median nach Sortierung

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});
