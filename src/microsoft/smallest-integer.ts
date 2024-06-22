// Write a function:

// function solution(A: number[]): number;

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

const smallestInteger = (A: number[]): number => {
  const integers = A.reduce((acc: number[], val: number) => {
    if (val > 0 && !acc.includes(val)) acc.push(val);
    return acc;
  }, []);

  if (integers.length === 0) return 1;

  integers.sort();

  for (let j = 0; j < integers.length; j++) {
    if (integers[j] + 1 !== integers[j + 1]) {
      return integers[j] + 1;
    }
  }

  return integers[integers.length] + 1;
};

export default smallestInteger;
