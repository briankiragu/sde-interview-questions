/**
 * Given an integer n, return the least number of perfect square numbers that sum to n.
 *
 * A perfect square is an integer that is the square of an integer;
 * in other words, it is the product of some integer with itself.
 * For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 *
 * Example 1:
 *
 * Input: n = 12
 * Output: 3
 * Explanation: 12 = 4 + 4 + 4.
 *
 *
 * Example 2:
 *
 * Input: n = 13
 * Output: 2
 * Explanation: 13 = 4 + 9.
 *
 * Constraints:
 * 1 <= n <= 104
 */
const numSquares = (n: number): number => {
  let count: number = 0;
  let localN: number = n;
  let squares: number[] = [];

  // Get all squares between 1 and n.
  for (let i = 1; i < n; i++) {
    const square = i ** 2;

    if (square > n) {
      break;
    }

    squares.push(square);
  }

  // Subtract a square until 0.
  while (localN > 0) {
    // Get the items in the squares that are less than
    // or equal to the localN.
    squares = squares.filter((square) => square <= localN);

    // Subtract the max of the squares from the localN.
    localN -= Math.max(...squares);

    // Add the count.
    count++;
  }

  return count;
};

export default numSquares;
