// models/account.model.ts

import mongoose, { Schema, Document } from 'mongoose';
import { IAccount } from '../types/account.types';

export interface IAccountModel extends IAccount, Document {}

const AccountSchema: Schema = new Schema<IAccountModel>(
  {
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    accountNumber: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const AccountModel = mongoose.model<IAccountModel>('Account', AccountSchema);
