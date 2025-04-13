import { describe, it, expect } from 'vitest';
import { add } from './index.js';

describe('add function', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(add(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });

  it('should return zero when adding zero', () => {
    expect(add(10, 0)).toBe(10);
    expect(add(0, 5)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });
});
