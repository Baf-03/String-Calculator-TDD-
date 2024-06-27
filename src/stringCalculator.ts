export function add(numbers: string): number {
  if (!numbers) return 0;

  const numArray = (numbers.match(/-?\d+/g) || []).map(Number);

  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
