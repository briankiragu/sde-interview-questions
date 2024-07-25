import { describe, test, expect } from "bun:test";
import primeDecomposition from "../../src/microsoft/prime-decomposition";

describe("Prime decomposition", () => {
  test("7 returns [7]", () => {
    expect(primeDecomposition(7)).toStrictEqual([7]);
  });

  test("21 returns [3,7]", () => {
    expect(primeDecomposition(21)).toStrictEqual([3, 7]);
  });

  test("28 returns [2,2,7]", () => {
    expect(primeDecomposition(28)).toStrictEqual([2, 2, 7]);
  });

  test("30 returns [2,3,5]", () => {
    expect(primeDecomposition(30)).toStrictEqual([2, 3, 5]);
  });

  test("32 returns [2,2,2,2,2]", () => {
    expect(primeDecomposition(32)).toStrictEqual([2, 2, 2, 2, 2]);
  });

  test("100000 returns [2,2,2,2,2,5,5,5,5,5]", () => {
    expect(primeDecomposition(100000)).toStrictEqual([
      2, 2, 2, 2, 2, 5, 5, 5, 5, 5,
    ]);
  });
});
