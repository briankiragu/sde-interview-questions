const largestSquareFromSticks = (A: number, B: number): number => {
  // Get the largest possible width of any square made from the total length.
  let width = Math.floor((A + B) / 4);

  // Create a variable to hold the total number of widths.
  let totalSides: number = 0;

  // As long as the width is a positive integer...
  while (width) {
    totalSides += Math.floor(A / width) + Math.floor(B / width);

    // If the total sides are greater than or equal to 4,
    // break out of the loop.
    if (totalSides >= 4) break;

    // Decrement the width.
    width--;
  }

  return width;
};

export default largestSquareFromSticks;
