import { describe, test, expect } from "bun:test";
import reverseString from "../../src/leet-code/reverse-string";

describe("Revserse String", () => {
  test('Returns ["o","l","l","e","h"]', () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);
    expect(s).toEqual(["o", "l", "l", "e", "h"]);
  });

  test('Returns ["h","a","n","n","a","H"]', () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);
    expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
  });

  test('Returns ["u","g","n","a","Y"]', () => {
    const s = ["Y", "a", "n", "g", "u"];
    reverseString(s);
    expect(s).toEqual(["u", "g", "n", "a", "Y"]);
  });
});
