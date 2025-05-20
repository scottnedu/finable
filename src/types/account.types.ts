// types/account.types.ts
export interface ICard {
  cardNumber: string;
  cvv: string;
  expiryDate: string; // Format: MM/YY
}

export interface IAccount {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  accountNumber: string;
  card: ICard;
  createdAt?: Date;
  updatedAt?: Date;
}
