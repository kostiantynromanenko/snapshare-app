import { isValidEmail, isValidUsername } from './validations';

describe('Validations', () => {
  it('should return true for valid usernames', () => {
    expect(isValidUsername('john_doe123')).toBe(true);
    expect(isValidUsername('susan-smith')).toBe(true);
  });

  it('should return false for invalid usernames', () => {
    expect(isValidUsername('j')).toBe(false);
    expect(isValidUsername('jane doe')).toBe(false);
    expect(isValidUsername('this-username-is-too-long')).toBe(false);
  });

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
