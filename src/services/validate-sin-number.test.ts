import { describe, it, expect } from 'vitest';
import validateSinNumber from './validate-sin-number';

describe('validateSinNumber', () => {
  it('should return true when given a valid SIN', () => {
    expect(validateSinNumber('046454286')).toBe(true);
  });

  it('should return false when given a invalid SIN', () => {
    expect(validateSinNumber('046454296')).toBe(false);
  });

  it('should return false if SIN has not 9 digits', () => {
    expect(validateSinNumber('12345678')).toBe(false);
    expect(validateSinNumber('1234567890')).toBe(false);
  });

  it('should ignore not numeric characters', () => {
    expect(validateSinNumber('046-454-286')).toBe(true);
    expect(validateSinNumber('046.454.286')).toBe(true);
  });

  it('should return false when SIN contains not numeric characters', () => {
    expect(validateSinNumber('abcdefghi')).toBe(false);
    expect(validateSinNumber('04645428A')).toBe(false);
  });
});
