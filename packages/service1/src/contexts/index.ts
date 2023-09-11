import { createContext } from 'react';
import { IAuth } from '../types/user';

export interface IAuthContext {
  auth: IAuth;
  updateAuth: (auth: IAuth) => void;
}

export const AuthContext = createContext<IAuthContext>({
  auth: { isLoggedIn: false },
  updateAuth: (auth: IAuth) => auth,
});
