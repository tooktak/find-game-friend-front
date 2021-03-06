import { useContext } from 'react';
import LoginProvider, { LoginContext } from './Login';

const useLoginContext = () => {
  const state = useContext(LoginContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
};

export { useLoginContext };
export default LoginProvider;
