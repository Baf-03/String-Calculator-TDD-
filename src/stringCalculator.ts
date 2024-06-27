export function add(numbers: string): number {
  if (!numbers) return 0;

  const { delimiter, numberString } = parseInput(numbers);
  const numArray = splitNumbers(numberString, delimiter);
  validateNoNegatives(numArray);

  return sumNumbers(numArray);
}

function parseInput(input: string): { delimiter: RegExp, numberString: string } {
  const defaultDelimiters = /,|\n/;

  if (input.startsWith("//")) {
    const parts = input.split("\n", 2);
    const customDelimiter = new RegExp(parts[0].substring(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return { delimiter: customDelimiter, numberString: parts[1] };
  }

  return { delimiter: defaultDelimiters, numberString: input };
}

function splitNumbers(numbers: string, delimiter: RegExp): string[] {
  return numbers.split(delimiter);
}

function validateNoNegatives(numArray: string[]): void {
  const negatives = numArray.filter(n => parseInt(n) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
}

function sumNumbers(numArray: string[]): number {
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
