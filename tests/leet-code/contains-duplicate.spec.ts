import { describe, test, expect } from 'bun:test';
import containsDuplicate from '../../src/leet-code/contains-duplicate';

describe('Contains Duplicate', () => {
  test('Returns true when duplicate', () => {
    expect(containsDuplicate([1, 2, 3, 4, 4])).toBeTrue();
  });

  test('Returns false when no duplicate', () => {
    expect(containsDuplicate([1, 2, 3, 4, 5])).toBeFalse();
  });

  test('Returns false when empty', () => {
    expect(containsDuplicate([])).toBeFalse();
  });
});
