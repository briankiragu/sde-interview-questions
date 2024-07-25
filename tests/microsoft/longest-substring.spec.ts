import { describe, test, expect } from "bun:test";
import longestSubstring from "../../src/microsoft/longest-substring";

describe("Smallest integer", () => {
  test("Throws an error", () => {
    expect(() => longestSubstring()).toThrow();
  });

  test("Returns 0", () => {
    expect(longestSubstring("", 3)).toBe(0);
  });

  test("Returns 6", () => {
    expect(longestSubstring("abcabcdefgghiij", 3)).toBe(6);
  });

  test("Returns 7", () => {
    expect(longestSubstring("abcabcdefgghiij", 4)).toBe(7);
  });

  test("Returns 7", () => {
    expect(longestSubstring("abcabcdefgghghfij", 3)).toBe(7);
  });
});
