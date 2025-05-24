import Joi from 'joi';

export const createAccountSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required',
  }),
  surname: Joi.string().trim().required().messages({
    'string.empty': 'Surname is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Enter a valid email',
    'string.empty': 'Email is required',
  }),
  phoneNumber: Joi.string().required().messages({
    'string.empty': 'Phone number is required',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is required',
  }),
});
