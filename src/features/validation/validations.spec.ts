import { isValidEmail } from './validations';

describe('Validations', () => {
  it('should return true for valid emails', () => {
    expect(isValidEmail('john.doe@example.com')).toBe(true);
    expect(isValidEmail('susan_smith123@test.co.uk')).toBe(true);
  });

  it('should return false for invalid emails', () => {
    expect(isValidEmail('jane doe@example.com')).toBe(false);
    expect(isValidEmail('this-is-not-a-valid-email')).toBe(false);
    expect(isValidEmail('email@')).toBe(false);
  });
});
