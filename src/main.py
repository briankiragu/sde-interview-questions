"""Main file for running Python challenges"""

from random import randint

from alx.prime_game import is_winner

UPPER_LIMIT = 100
number_of_rounds = randint(1, UPPER_LIMIT)
nums = [randint(1, UPPER_LIMIT) for _ in range(number_of_rounds)]

our_winner: str | None = is_winner(number_of_rounds, nums)
print(our_winner)
