import { describe, test, expect } from "bun:test";
import longestSubstring from "../../src/microsoft/longest-substring";

describe("Smallest integer", () => {
  test("Throws an error", () => {
    expect(() => longestSubstring()).toThrow();
  });

  test("Returns 0", () => {
    expect(longestSubstring("", 3)).toBe(0);
  });

  test.todo("Returns 6", () => {
    expect(longestSubstring("abcabcdefgghiij", 3)).toBe(6);
  });

  test.todo("Returns 7", () => {
    expect(longestSubstring("abcabcdefgghighij", 3)).toBe(7);
  });
});
