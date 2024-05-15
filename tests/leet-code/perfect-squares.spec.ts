import { describe, expect, test } from 'bun:test';
import numSquares from '../../src/leet-code/perfect-squares';

describe('Happy Path', () => {
  test.todo('1', async () => {
    expect(numSquares(1)).toBe(1);
  });

  test.todo('12', async () => {
    expect(numSquares(12)).toBe(3);
  });

  test.todo('13', async () => {
    expect(numSquares(13)).toBe(2);
  });

  test.todo('104', async () => {
    expect(numSquares(104)).toBe(2);
  });
});
