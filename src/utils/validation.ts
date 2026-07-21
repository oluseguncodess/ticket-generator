export function hasSpecialChar(str: string) {
    return /[^a-zA-Z0-9]/.test(str); 
}

export function isValidEmail(str: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}