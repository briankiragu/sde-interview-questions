import { describe, expect, it } from "bun:test";

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

const maxArea = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (area > max) max = area;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
  // Time:  O(n)  — each index is visited at most once across the two pointers
  // Space: O(1)
};

describe("maxArea", () => {
  it("'[1,8,6,2,5,4,8,3,7]' returns 49", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  it("'[1,1]' returns 1", () => {
    expect(maxArea([1, 1])).toEqual(1);
  });

  it("'[3,1,2,4,4]' returns 12 (wide-but-short left wall beats nearby tall one)", () => {
    expect(maxArea([3, 1, 2, 4, 4])).toEqual(12);
  });

  it("'[1,2,3,4,5]' returns 6", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toEqual(6);
  });

  it("'[5,4,3,2,1]' returns 6", () => {
    expect(maxArea([5, 4, 3, 2, 1])).toEqual(6);
  });

  it("'[2,3,4,5,18,17,6]' returns 17", () => {
    expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toEqual(17);
  });
});
