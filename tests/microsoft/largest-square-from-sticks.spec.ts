import { describe, test, expect } from "bun:test";
import largestSquareFromSticks from "../../src/microsoft/largest-square-from-sticks";

describe("Smallest integer", () => {
  test("Returns 7", () => {
    expect(largestSquareFromSticks(10, 21)).toBe(7);
  });

  test("Returns 5", () => {
    expect(largestSquareFromSticks(11, 13)).toBe(5);
  });

  test("Returns 2", () => {
    expect(largestSquareFromSticks(1, 8)).toBe(2);
  });
});
