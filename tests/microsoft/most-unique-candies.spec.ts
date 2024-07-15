import { describe, test, expect } from "bun:test";
import mostUniqueCandies from "../../src/microsoft/most-unique-candies";

describe("Smallest integer", () => {
  test.todo("Returns 5", () => {
    expect(mostUniqueCandies([1, 3, 6, 4, 1, 2])).toBe(5);
  });

  test.todo("Returns 4", () => {
    expect(mostUniqueCandies([1, 2, 3])).toBe(4);
  });

  test.todo("Returns 1", () => {
    expect(mostUniqueCandies([-1, -3])).toBe(1);
  });
});
