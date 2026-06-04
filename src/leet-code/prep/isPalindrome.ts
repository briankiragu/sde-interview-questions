const isPalindrome = (x: number): boolean => {
  const xStr: string[] = `${x}`.split("");
  const halfLength: number = Math.floor(xStr.length / 2);

  const halfOne: string[] = xStr.slice(0, halfLength);
  const halfTwo: string[] = xStr.slice(halfLength).toReversed();

  for (let i = 0; i < halfLength; i++) {
    const left = halfOne[i];
    const right = halfTwo[i];

    if (left !== right) return false;
  }

  return true;
};

isPalindrome(12588521);
isPalindrome(12585358521);
isPalindrome(12583558521);
isPalindrome(-121);
isPalindrome(121);
isPalindrome(10);

export default isPalindrome;
