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
const longestSubstring = (word?: string, k?: number): number => {
  if (word === undefined || k === undefined)
    throw new Error("Second input is invalid");

  if (k > word.length) return 0;

  const lengthsOfLargestSubstrings: number[] = [];

  // Starting at each letter of the word...
  for (let i = 0; i < word.length; i += 1) {
    const stackOfRecentLetters: Set<string> = new Set();
    let lengthOfSubstring: number = 0;

    // Starting at that letter
    for (const letter of word.slice(i)) {
      const isANewLetter: boolean = !stackOfRecentLetters.has(letter);
      const theStackIsFull: boolean = stackOfRecentLetters.size === k;

      if (isANewLetter) {
        if (!theStackIsFull) {
          stackOfRecentLetters.add(letter);
        } else {
          lengthsOfLargestSubstrings.push(lengthOfSubstring);
          break;
        }
      }

      // Increment the length of the largest substing
      lengthOfSubstring += 1;
    }
  }

  // Return the length of the largest substring.
  return Math.max(...lengthsOfLargestSubstrings);
};

export default longestSubstring;
