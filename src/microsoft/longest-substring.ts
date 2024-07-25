/**
 * Problem: Find the longest substring with at most k distinct characters.
 *
 * Constraints
 * Can we assume the inputs are valid?
 *  No
 * Can we assume the strings are ASCII?
 *  Yes
 * Is this case sensitive?
 *  Yes
 * Is a substring a contiguous block of chars?
 *  Yes
 * Do we expect an int as a result?
 *  Yes
 * Can we assume this fits memory?
 *  Yes
 */

const longestSubstring = (str?: string, k?: number): number => {
  // Throw an error if any of the inputs is invalid.
  if (str === undefined || k === undefined)
    throw new Error("Second input is invalid");

  // If the string is smaller than 'k', return 0.
  if (k > str.length) return 0;

  // Variables to hold the current largest substring and
  // stack of recent characters.
  let lengthOfLargestSubstring: number = 0;
  let recentCharactersStack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    // If the recent characters stack is full (same size as k)
    // and the current character is not in the stack,
    // reset the stack and skip the current iteration of the loop.
    if (
      recentCharactersStack.length === k &&
      !recentCharactersStack.includes(str[i])
    ) {
      recentCharactersStack = [];
      continue;
    }

    // If the current char is not in the stack, add it.
    if (!recentCharactersStack.includes(str[i])) {
      recentCharactersStack.push(str[i]);
    }
  }
};

export default longestSubstring;
