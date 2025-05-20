export function generateCardNumber(): string {
  const prefix = "5" + Math.floor(Math.random() * 10); // Ensure it starts like a Mastercard
  const rest = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
  return prefix + rest.slice(1); // Ensure total is 16 digits
}

export function generateCVV(): string {
  return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
}

export function generateExpiryDate(): string {
  const now = new Date();
  const future = new Date(now.setFullYear(now.getFullYear() + 3)); // 3 years ahead
  const month = String(future.getMonth() + 1).padStart(2, '0');
  const year = String(future.getFullYear()).slice(-2);
  return `${month}/${year}`;
}
