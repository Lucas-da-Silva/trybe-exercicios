import userModel from '../models/user.model';
import { newUser, UserResponse } from '../types/user.type';
import { invalidResponse, validResponse } from '../types/types.type';
import userValidations from './validations/user.validation';
import jwtFunctions from '../utils/jwtFunctions';

const login = async (email: string, password: string, token: string) => {
  const decodedToken = jwtFunctions.verifyToken(token);
  if (!decodedToken) {
    
  }
  const user = await userModel.login(email, password);
  if (!user) return { type: 'UNAUTHORIZED', message: 'Invalid email or password.' };
}

const getAll = async (): Promise<UserResponse[]> => {
  const users = await userModel.getAll();
  return users;
};

const getById = async (id: number): Promise<UserResponse> => {
  const user = await userModel.getById(id);
  return user;
};

const create = async (user: newUser): Promise<validResponse | invalidResponse> => {
  const isFieldsInvalid = await userValidations.fieldsUser(user);
  if (isFieldsInvalid.type) return isFieldsInvalid;

  const isEmailInvalid = await userValidations.emailIsNew(user.email);
  if (isEmailInvalid.type) return isEmailInvalid;

  const createdUser = await userModel.create(user);
  return { type: null, message: createdUser };
};

const update = async (id: number, user: newUser): Promise<validResponse | invalidResponse> => {
  const isFieldsInvalid = await userValidations.fieldsUser(user);
  if (isFieldsInvalid.type) return isFieldsInvalid;

  const updatedUser = await userModel.update(id, user);
  return { type: null, message: updatedUser };
};

export default { getAll, getById, create, update };
