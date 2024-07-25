const primeDecomposition = (x: number): number[] => {
  let temp: number = x;
  const decompositions: number[] = [];

  // Get all the primes upto x.
  const primes: number[] = [...Array(x + 1).keys()]
    .slice(2)
    .reduce((acc: number[], val: number) => {
      if (acc.every((prime) => val % prime !== 0)) acc.push(val);
      return acc;
    }, []);

  for (const prime of primes) {
    while (temp % prime === 0) {
      decompositions.push(prime);
      temp = temp / prime;
    }

    if (temp === 1) break;
  }

  return decompositions;
};

export default primeDecomposition;
