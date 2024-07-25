import pytest
from src.alx.prime_game import is_winner

def test_basic_functionality():
    assert is_winner(0, []) == "Maria"
    assert is_winner(1, [4]) == "Ben"
    assert is_winner(3, [4, 5, 1]) == "Ben"
    assert is_winner(4, [15, 6, 17, 100]) == "Maria"

def test_edge_cases():
    assert is_winner(1, [4, 9]) == "Ben"  # No prime numbers
    assert is_winner(1, [2, 3, 5]) == "Maria"  # All prime numbers
    assert is_winner(100, [10000] * 100) == "Maria"  # Large n and x
    assert is_winner(2, [4, 5]) == "Maria"  # Tie condition

def test_specific_scenarios():
    assert is_winner(4, [4, 5, 4, 5]) == "Maria"  # Alternating wins
    assert is_winner(3, [4, 5, 6]) == "Maria"  # One player wins all rounds

def test_invalid_input():
    with pytest.raises(ValueError):
        is_winner(-1, [4])  # Negative number of rounds
    with pytest.raises(TypeError):
        is_winner(1, "invalid_input")  # Invalid nums type
