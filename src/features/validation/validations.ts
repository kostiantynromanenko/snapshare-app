const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]\\:';"<>?,./-])(?=.*[a-zA-Z]).{8,}$/;

export const isValidUsername = (username: string): boolean => usernameRegex.test(username);
export const isValidEmail = (email: string): boolean => emailRegex.test(email);
