import { describe, test, expect } from "bun:test";
import smallestInteger from "../../src/microsoft/smallest-integer";

describe("Smallest integer", () => {
  test("Returns 5", () => {
    expect(smallestInteger([1, 3, 6, 4, 1, 2])).toBe(5);
  });

  test("Returns 4", () => {
    expect(smallestInteger([1, 2, 3])).toBe(4);
  });

  test("Returns 1", () => {
    expect(smallestInteger([-1, -3])).toBe(1);
  });
});
