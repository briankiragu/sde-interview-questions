import { describe, test, expect } from "bun:test";
import findDiff from "../../src/microsoft/string-difference";

describe("Difference in string", () => {
  test("Throws error", () => {
    expect(() => findDiff()).toThrow();
  });

  test("Returns 'a'", () => {
    expect(findDiff("ab", "aab")).toBe("a");
  });

  test("Returns 'a'", () => {
    expect(findDiff("aab", "ab")).toBe("a");
  });

  test("Returns 'e'", () => {
    expect(findDiff("abcd", "abcde")).toBe("e");
  });

  test("Returns 'e", () => {
    expect(findDiff("aaabbcdd", "abdbacade")).toBe("e");
  });

  test("Returns 'f", () => {
    expect(findDiff("aaabbcddef", "abdbacade")).toBe("f");
  });
});
