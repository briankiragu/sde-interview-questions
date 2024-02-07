"""Maria and Ben are playing a game. Given a set of consecutive integers
starting from 1 up to and including n, they take turns choosing a prime number
from the set and removing that number and its multiples from the set.
The player that cannot make a move loses the game.

They play x rounds of the game, where n may be different for each round.
Assuming Maria always goes first and both players play optimally,
determine who the winner of each game is.

Prototype: def isWinner(x, nums)
where x is the number of rounds and nums is an array of n
Return: name of the player that won the most rounds
If the winner cannot be determined, return None
You can assume n and x will not be larger than 10000
You cannot import any packages in this task
Example:

x = 3, nums = [4, 5, 1]
First round: 4

Maria picks 2 and removes 2, 4, leaving 1, 3
Ben picks 3 and removes 3, leaving 1
Ben wins because there are no prime numbers left for Maria to choose
Second round: 5

Maria picks 2 and removes 2, 4, leaving 1, 3, 5
Ben picks 3 and removes 3, leaving 1, 5
Maria picks 5 and removes 5, leaving 1
Maria wins because there are no prime numbers left for Ben to choose
Third round: 1

Ben wins because there are no prime numbers for Maria to choose
"""


def is_winner(x: int, nums: list[int]) -> str | None:
    """Implementation of the Prime Game"""
    # Set of players.
    score: dict[str, int] = {"Maria": 0, "Ben": 0}

    # Loop through the rounds.
    for current_round in range(x):
        # Define the current winner of the round.
        winner: str | None = list(score.keys())[-1]

        # Create the set of numbers for this round.
        number_set: list[int] = list(range(1, nums[current_round] + 1))

        # Define a variable to hold the number of attempts to find a prime.
        number_of_attempts: int = 0

        # While a prime number is in the set...
        while find_prime(nums=number_set):
            # Based on the current iteration, get the current player.
            winner = list(score.keys())[number_of_attempts % 2]

            # Check for prime numbers in the set.
            prime: int | None = find_prime(number_set)

            # Get the multiples of the prime number.
            prime_multiples: list[int] = [
                multiple for multiple in number_set if multiple % prime == 0
            ]

            # Remove the prime number and its multiples from the the set.
            number_set = list(set(number_set) - set(prime_multiples))
            number_set.sort()

            # Return the subset.
            number_of_attempts += 1

        # Set the winner of the current round.
        if winner:
            score[winner] += 1

    # If no winner, return None.
    return max(score, key=score.get)  # type: ignore


def find_prime(nums: list[int]) -> int | None:
    """Iterate through a set of integers and return the first 'prime' number"""
    prime: int | None = None

    for i, num in enumerate(nums):
        # 1 is not a prime number, skip it.
        if num == 1:
            continue

        # If a prime number was found, break out of the loop.
        if prime:
            break

        # Get a subset of all the numbers before the current index.
        divisors: list[int] = nums[:i]

        # Tentatively, assume this number is prime.
        prime = num

        for divisor in divisors:
            # If the divisor is 1, don't test for it.
            if divisor == 1:
                continue

            # If any number (except 1) successfully divides it (mod is 0),
            # it is not prime.
            if num % divisor == 0:
                prime = None
                break

    return prime


if __name__ == "__main__":
    our_winner: str | None = is_winner(4, [15, 6, 17, 100])
    print(our_winner)
