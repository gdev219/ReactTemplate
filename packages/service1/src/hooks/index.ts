import { useContext } from 'react';
import { AuthContext } from '../contexts';

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('context must be provided');
  }
  return context;
}
