const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const getAspectRatioCoefficient = (width: number, height: number): number => {
  const r = gcd(width, height);

  return width / r / (height / r);
};

export const getGridSpanEdges = (
  width: number,
  height: number
): { colEnd: number; rowEnd: number } => {
  const ar = getAspectRatioCoefficient(width, height);

  const colEnd = ar >= 1.4 ? 2 : 1;
  const rowEnd = ar < 0.55 ? 2 : 1;

  return { colEnd, rowEnd };
};
