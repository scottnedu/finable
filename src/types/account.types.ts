// types/account.types.ts

export interface IAccount {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  accountNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}
