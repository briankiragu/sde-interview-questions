/**
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:*
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */

const containsDuplicate = (nums: number[]): boolean => {
  // Declare a hash map to save the numbers and
  // the number of times they appear.
  let hashMap: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    // If the value already exists in the hash map,
    // then it was already recorded. In that case,
    // break the loop and return `true`.
    if (nums[i] in hashMap) {
      return true;
    }

    // Add the value to the hashmap
    hashMap = { ...hashMap, [nums[i]]: 1 };
  }

  return false;
};

export default containsDuplicate;
