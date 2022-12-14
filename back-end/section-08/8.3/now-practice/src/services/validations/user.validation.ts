import { newUser } from "../../types/user.type";
import userModel from "../../models/user.model";

const regexEmail = /\S+@\S+\.\S+/;

const createError = (message: string) => ({ type: 'BAD_REQUEST', message });

const fieldsUser = async ({ name, email, password }: newUser) => {
  if(password.length < 6 || password.length > 12) {
    return createError('The password must have a minimum of 6 and a maximum of 12 characters.')
  }
  if(name.length < 3) { 
    return createError('The name must be at least 3 characters long.')
  } 
  if(!regexEmail.test(email)) {
    return createError('Email must have a valid email format (email@email.com).');
  }
  return { type: null };
};

const emailIsNew = async (email: string) => {
  const emailIsInvalid = await userModel.getByEmail(email);
  if (emailIsInvalid.length) return createError('Email is already registered.');
  
  return { type: null };
}

export default { fieldsUser, emailIsNew };