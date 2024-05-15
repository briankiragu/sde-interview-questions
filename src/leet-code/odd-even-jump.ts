/**
 * You are given an integer array 'arr'.
 * From some starting index, you can make a series of jumps.
 * The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps,
 * and the (2nd, 4th, 6th, ...) jumps in the series are called even-numbered jumps.
 * Note that the jumps are numbered, not the indices.
 *
 * You may jump forward from index i to index j (with i < j) in the following way:
 *
 * During odd-numbered jumps (i.e., jumps 1, 3, 5, ...),
 * you jump to the index j such that arr[i] <= arr[j]
 * and arr[j] is the smallest possible value.
 * If there are multiple such indices j,
 * you can only jump to the smallest such index j.
 *
 * During even-numbered jumps (i.e., jumps 2, 4, 6, ...),
 * you jump to the index j such that arr[i] >= arr[j]
 * and arr[j] is the largest possible value.
 * If there are multiple such indices j,
 * you can only jump to the smallest such index j.
 *
 * It may be the case that for some index i, there are no legal jumps.
 * A starting index is good if, starting from that index,
 * you can reach the end of the array (index arr.length - 1)
 * by jumping some number of times (possibly 0 or more than once).
 *
 * Return the number of good starting indices.
 *
 * Constraints:
 *
 * 1 <= arr.length <= 2 * 104
 * 0 <= arr[i] < 105
 */
const oddEvenJumps = (arr: number[]): number => {
  // Create a list to hold the indices.
  const indices: Record<number, boolean> = {};
  let tempArr: number[];
  let chunk: number[];
  let currentIndex: number;

  // The current index of each jump.
  for (let index = 0; index < arr.length; index++) {
    tempArr = JSON.parse(JSON.stringify(arr));
    currentIndex = 0;

    // The last index is always correct.
    if (index === tempArr.length - 1) {
      indices[index] = true;
      continue;
    }

    for (let jump = 0; jump <= arr.length; jump++) {
      if ((jump + 1) % 2) {
        // Get the remaining numbers larger than or equal to the current value.
        chunk = tempArr
          .slice(currentIndex + 1)
          .filter((item) => item >= tempArr[jump]);

        // If the list is empty, skip the rest of the loop.
        if (chunk.length === 0) {
          indices[index] = false;
          break;
        }

        currentIndex = tempArr.indexOf(Math.min(...chunk));

        // If the next index is the last index, skip the rest of the loop.
        if (currentIndex === arr.length - 1) {
          indices[index] = true;
          break;
        }
      } else {
        // Get the remaining numbers smaller than or equal to the current value.
        chunk = arr
          .slice(currentIndex + 1)
          .filter((item) => item <= tempArr[jump]);

        // If the list is empty, skip the rest of the loop.
        if (chunk.length === 0) {
          indices[index] = false;
          break;
        }

        currentIndex = tempArr.indexOf(Math.max(...chunk));

        // If the next index is the last index, skip the rest of the loop.
        if (currentIndex === tempArr.length - 1) {
          indices[index] = true;
          break;
        }
      }
    }
  }

  return Object.entries(indices).filter(([, value]) => value).length;
};

export default oddEvenJumps;
