export function normalize(values: number[]): number[] {
  const sum = values.reduce((a, b) => a + b);
  return values.map(v => v / sum);
}

export function cummulativeSum(values: number[]): number[] {
  let sum = 0;
  return values.map((value: number) => sum += value);
}