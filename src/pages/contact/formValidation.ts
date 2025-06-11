
export function validateNumber(message: string): string {
  if (message.length > 12) {
    return "Message must be 12 characters or less.";
  }

  if (!/^\d+$/.test(message)) {
    return "Message must contain only numbers.";
  }

  return "";
}

export function validateEmail(email: string): string {
  if (!email) return "Email is required.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }

  return "";
}
