# 🌍 Finable API – Learnable 24 Backend Quest

Welcome to the **Finable API**, your gateway into a redefined financial future. This project was built as part of the **Learnable 24 Backend Standardization Quest**, guided by the Custodians of the Protocol.

## 🧭 Project Overview

In a world rebuilt after digital collapse, Finable represents trust, structure, and encryption. This API completes all five Protocol Trials:

1. **🧬 Trial of Identity** – Account Creation
2. **💳 Trial of the Card** – Virtual Card Generation
3. **🔐 Trial of the Cipher** – Field-Level Encryption
4. **📜 Trial of the Ledger** – Encrypted Account Listing
5. **🗂️ Trial of Clarity** – API Documentation

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Crypto (Node.js native)
- joi (for validation)
- Postman (for API documentation)

---

## 🔗 Useful Links

- 🚀 **Live API**: <https://finable-api.onrender.com>
- 📘 **Postman Documentation**: <https://documenter.getpostman.com/view/42929987/2sB2qajMVk>
- 🗂️ **Finable Backend - Account API Test**: <https://tinyurl.com/3pze98dz>

## 📦 Features

### ✅ Account Creation

- Automatically generates a unique 10-digit account number.

### ✅ Virtual Card Generation

- Attaches a Virtual Card to a created account
- Includes 16-digit card number, 3-digit CVV, and expiry date (MM/YY, +3 years).

### ✅ Field Encryption

- Sensitive fields are encrypted using AES-256.
- Fields: `cardNumber`, `cvv`, `expiryDate`, `phoneNumber`, `dateOfBirth`.
- Both encrpted and decrpted version are returned in API response.

### ✅ Account Listing

- Lists all created accounts.
- Shows both encrypted and decrypted fields.
- Separate endpoint decrypts any submitted encrypted payload.

---

## 🔐 Environment Variables

My `.env` file contains the following:

```env
PORT=3000
MONGO_URI=my_mongodb_connection_string
ENCRYPTION_KEY=my_32_byte_encryption_key
IV_KEY=my_16_byte_encryption_key

🧙‍♂️ Protocol Compliance
This API is fully compliant with all five Trials of the Learnable Protocol. From unique ID generation to field-level encryption and professional API documentation, Finable is a fortress built on trust.

🙏 Acknowledgement
This project was developed as part of the Learnable 24 Backend Track, guided by the story and standards of the Protocol Guild.
