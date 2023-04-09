const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]\\:';"<>?,./-])(?=.*[a-zA-Z]).{8,}$/;

export const isValidEmail = (email: string): boolean => EMAIL_REGEX.test(email);
