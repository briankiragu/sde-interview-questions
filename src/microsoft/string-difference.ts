/**
 * Problem: Find the single different char between two strings.
 *
 * Constraints
 * Can we assume the strings are ASCII?
 *  Yes
 * Is case important?
 *  The strings are lower case
 * Can we assume the inputs are valid?
 *  No, check for None
 *  Otherwise, assume there is only a single different char between the two strings
 * Can we assume this fits memory?
 *  Yes
 */

const findDiff = (str1?: string, str2?: string): string => {
  // Throw an error if either of the inputs is missing.
  if (str1 === undefined || str2 === undefined) {
    throw new Error("Missing input values");
  }

  // Get the longer and shorter of the two strings.
  const longerStr: string[] = [...(str1.length > str2.length ? str1 : str2)];
  const shorterStr: string[] = [...(str1.length < str2.length ? str1 : str2)];

  // Create a stack to hold the parsed characters.
  const charStack: string[] = [];

  // Loop through the longer string.
  for (const char of longerStr) {
    // Check the index of the first occurence of the char.
    const indexOfFirstMatch: number = shorterStr.indexOf(char);

    // If a match was found, we remove it from the shorter string.
    if (indexOfFirstMatch >= 0) {
      shorterStr.splice(indexOfFirstMatch, 1);
    } else {
      // Push it onto the stack.
      charStack.push(char);
    }
  }

  return charStack[0];
};

export default findDiff;
