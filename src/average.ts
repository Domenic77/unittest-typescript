export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot compute median of an empty list");
  }

  // Sortiere die Zahlenreihe
  numbers.sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);

  // Wenn die Anzahl der Zahlen ungerade ist, gibt es ein mittleres Element
  if (numbers.length % 2 !== 0) {
    return numbers[middle];
  } else {
    // Wenn die Anzahl der Zahlen gerade ist, berechne das arithmetische Mittel der beiden mittleren Zahlen
    return (numbers[middle - 1] + numbers[middle]) / 2;
  }
}
