import pytest
from src.alx.prime_game import is_winner

def test_basic_functionality():
    assert is_winner(0, []) is "Maria"
    assert is_winner(1, [4]) is "Ben"
    assert is_winner(3, [4, 5, 1]) is "Ben"
    assert is_winner(4, [15, 6, 17, 100]) is "Maria"

def test_edge_cases():
    assert is_winner(1, [4, 9]) is "Ben"  # No prime numbers
    assert is_winner(1, [2, 3, 5]) is "Maria"  # All prime numbers
    assert is_winner(100, [10000] * 100) is "Maria"  # Large n and x
    assert is_winner(2, [4, 5]) is "Maria"  # Tie condition

def test_specific_scenarios():
    assert is_winner(4, [4, 5, 4, 5]) is "Maria"  # Alternating wins
    assert is_winner(3, [4, 5, 6]) is "Maria"  # One player wins all rounds

def test_invalid_input():
    with pytest.raises(ValueError):
        is_winner(-1, [4])  # Negative number of rounds
    with pytest.raises(TypeError):
        is_winner(1, "invalid_input")  # Invalid nums type
