const global_dict = new Set([
  'PRIME',
  'PREMS',
  'DSEMS',
  'PREWS',
  'PRDSM',
  'ESEMS',
  'PREMS',
  'PRMSS',
  'EBZMS',
  'PRAMZ',
]);

const get_hints = (
  green: string[],
  yellow: string[],
  red: string[]
): string[] => {
  return [...global_dict]
    .filter((word: string) =>
      red
        .map((letter) => !word.includes(letter))
        .every((outcome) => outcome === true)
    )
    .filter((word: string) => {
      const isValid: boolean[] = [];

      green.forEach((v, i) => {
        if (v === '-') return;

        const exists = word.includes(v);
        const matchesIndex = word.split('')[i] === green[i];

        isValid.push(exists && matchesIndex);
      });

      return isValid.every((outcome) => outcome === true);
    })
    .filter((word: string) => {
      const isValid: boolean[] = [];

      yellow.forEach((v, i) => {
        if (v === '-') return;

        const exists = word.includes(v);
        const matchesIndex = word.split('')[i] === yellow[i];

        isValid.push(exists && !matchesIndex);
      });

      return isValid.every((outcome) => outcome === true);
    });
};

const output = get_hints(
  ['P', 'R', '-', '-', '-'],
  ['-', '-', 'M', '-', '-'],
  ['A', 'Z']
);

console.dir(output);
