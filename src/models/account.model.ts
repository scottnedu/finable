// models/account.model.ts

import mongoose, { Schema, Document } from 'mongoose';
import { IAccount, ICard } from '../types/account.types';


export interface IAccountModel extends IAccount, Document {}

const CardSchema: Schema<ICard> = new Schema<ICard>({
  cardNumber: { type: String, required: true },
  cvv: { type: String, required: true },
  expiryDate: { type: String, required: true },
});

const AccountSchema: Schema = new Schema<IAccountModel>(
  {
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    dateOfBirth: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    card:{ 
      type: CardSchema, 
      required: false,
      default: null
    },
  },
  { timestamps: true }
);

export const AccountModel = mongoose.model<IAccountModel>('Account', AccountSchema);
