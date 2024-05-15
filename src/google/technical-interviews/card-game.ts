// I have cards labeled with the numbers 1-13 and colors Red, Green, Blue, Yellow (R, G, B, Y).
// Each card has a number and a color. For example: “1R”, “13Y”

// Write a function that takes as input a list of cards, and determines if the input is a valid playing card set.

// Criterion 1: the set has 3 or more cards and all cards in the set have the same number and any color.
// Examples:
// - "1R", "1B", "1Y" (i.e. 1 of red, blue, yellow)
// - "5B", "5Y", "5R", "5G" (i.e. Five of Blue, Yellow, Red, Green)

// Criterion 2: the set has 3 or more cards and all cards in the set have the same color and consecutive numbers.
// Examples:
// - "2R", "3R", "4R" (i.e. 2, 3 and 4 of Red)
// - "9G", "10G", "11G", "12G", "13G" (i.e. 9, 10, 11, 12, 13 of Green)

// Examples of invalid sets:
// - "2Y", "3Y": only two cards are present but a minimum of 3 are required
// - "2Y", "3Y", "5Y": not consecutive numbers as it's missing the 4 of Yellow.
// - "2Y", "3Y", "4B": not all cards have the same colors (mix of Yellow and Blue)


// Write a function that takes as input a list of cards, and determines if the input is a valid playing card set.

// Examples:
// - Input: ["2R", "2Y", "2B"], Function returns: true
// - Input: ["2R", "3R", "4R"], Function returns: true
// - Input: ["2R", "3R", "4Y"], Function returns: false

// getNumber(“10Y”) = 10
// getColor(“10Y”) = “Y”
// // assume input sorted already


// -----------
// Follow Up Question #1: All valid Playing Card Sets


// Write a function that takes as input a list of cards, and outputs the list of all valid playing cards sets that can be created from this list of cards.

// Example
// - Input: ["1R", "2R", "3R", "3B", "3Y"]
// - Function returns: [["1R", "2R", "3R"], ["3R", "3B", "3Y"]]

// Input: ["1Y","2Y","3Y","4Y"]
// Function returns: [["1Y","2Y","3Y"],["2Y","3Y","4Y"], ["1Y","2Y","3Y","4Y"]]

// Input: ["4R","4B","4Y","4G"]
// Function returns: [["4R","4B","4Y"],["4R","4B","4G"], ["4R","4Y","4G"],["4B","4Y","4G"],["4R","4B","4Y","4G"]]


const checkHand = (hand: string[]): boolean => {
  // If the number of cards is less than 3, reject it.
  if (hand.length < 3) return false

  const matchingNumbers: boolean = true

  // Check if all the numbers are the same.
  for (let i = 1; i < hand.length; i++) {
    if (getNumber(hand[i]) !== getNumber(hand[i-1])) {
      matchingNumbers = false
      break;
  }

  // If the numbers match, return true.
  if (matchingNumbers) return true;

  const consecutiveNumbers: boolean = true;

  // Check if the numbers are consecutive.
  for (let j = 1; j < cardNumbers.length; j++) {
    if (getNumber(cardNumber[j] - 1) !== getNumber(cardNumber[j - 1])) {
      consecutiveNumbers = false;
      break;
  }

  // If the numbers aren't consecutive, we reject it.
  if (consecutiveNumbers !== true) return false;

  const matchingColours: boolean = true;

  // Check if the colours are the same.
  for (let k = 1; k < hand.length; k++) {
    if (getColour(hand[k]) !== getColour(hand[k - 1])) {
        matchingColours = false;
        break;
  }

  return matchingColours;
}

// O(n)
// O(1)
// ["1Y", "2G", "2B", "3R"]
