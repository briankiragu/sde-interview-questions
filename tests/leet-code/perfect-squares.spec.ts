import { describe, expect, test } from 'bun:test';
import numSquares from '../../src/leet-code/perfect-squares';

describe('Happy Path', () => {
  test('1', async () => {
    expect(numSquares(1)).toBe(1);
  });

  test('12', async () => {
    expect(numSquares(12)).toBe(3);
  });

  test('13', async () => {
    expect(numSquares(13)).toBe(2);
  });

  test('104', async () => {
    expect(numSquares(104)).toBe(2);
  });
});
