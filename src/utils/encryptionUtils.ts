import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY as string, 'hex');
const fixedIv = Buffer.from(process.env.ENCRYPTION_IV as string, 'hex'); // fixed IV (32 hex chars = 16 bytes)

export const encrypt = (text: string): { encryptedData: string, iv: string } => {
  const cipher = crypto.createCipheriv(algorithm, key, fixedIv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { encryptedData: encrypted, iv: fixedIv.toString('hex') };
};

export const decrypt = (encryptedData: string, ivHex: string): string => {
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(ivHex, 'hex'));
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
