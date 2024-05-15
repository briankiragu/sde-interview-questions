import { describe, test, expect } from "bun:test";
import twoSum from "../../src/leet-code/two-sums";

describe("Two Sums", () => {
  test("Returns [0, 1]", () => {
    expect(twoSum([2, 7, 11, 15], 8)).toEqual(expect.arrayContaining([0, 1]));
  });

  test("Returns [1, 2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
  });

  test("Returns [0, 1]", () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });
});
