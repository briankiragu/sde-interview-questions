const solution = (A: number[], B: number[]): number => {
  // Get the number of coins available (N/2).
  const coins = A.length / 2;

  // Get the unique candies from each shop.
  let uniqueInA: number[] = Array.from(new Set(A));
  let uniqueInB: number[] = Array.from(new Set(B));

  // Remove the duplicates from the larger set.
  if (uniqueInA.length > uniqueInB.length) {
    uniqueInA = uniqueInA.filter((val) => !uniqueInB.includes(val));
  } else {
    uniqueInB = uniqueInB.filter((val) => !uniqueInA.includes(val));
  }

  // Get the candies based on the coins.
  const candiesFromA: number =
    uniqueInA.length >= coins ? coins : uniqueInA.length;
  const candiesFromB: number =
    uniqueInB.length >= coins ? coins : uniqueInB.length;

  // Return the total unique candies from both shops.
  return candiesFromA + candiesFromB;
};

export default solution;
