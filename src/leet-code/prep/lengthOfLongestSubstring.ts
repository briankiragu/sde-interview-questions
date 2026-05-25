import { describe, expect, it } from "bun:test";

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s: string): number => {
  const lastIndex = new Map<string, number>();
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const prev = lastIndex.get(ch);

    if (prev !== undefined && prev >= start) {
      start = prev + 1;
    }

    lastIndex.set(ch, i);
    if (i - start + 1 > max) max = i - start + 1;
  }

  return max;
  // Time:  O(n)        — each index is visited once
  // Space: O(min(n, k)) — k = alphabet size
};

describe("lengthOfLongestSubstring", () => {
  it("'abcabcbb' returns 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });

  it("'bbbbb' Returns 1", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });

  it("'pwwkew' Returns 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });

  it("'tmmzuxt' Returns 5", () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).toEqual(5);
  });
});
