import { UserResponse } from './user.type';

export type validResponse = {
  type: null;
  message: UserResponse;
};

export type invalidResponse = {
  type: string;
  message: string;
};
