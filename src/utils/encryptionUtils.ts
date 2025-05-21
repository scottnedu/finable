import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const algorithm = 'aes-256-cbc';

// Clean and validate
const keyHex = process.env.ENCRYPTION_SECRET?.trim();
const ivHex = process.env.ENCRYPTION_IV?.trim();

if (!keyHex || !ivHex) {
  throw new Error('Encryption secret or IV is not set in environment variables');
}

const secretKey = Buffer.from(keyHex, 'hex');
const iv = Buffer.from(ivHex, 'hex');

if (secretKey.length !== 32 || iv.length !== 16) {
  throw new Error('❌ ENCRYPTION_SECRET must be 64 hex chars (32 bytes) and IV must be 32 hex chars (16 bytes)');
}

export function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(encryptedText: string): string {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
