import { createContext, ReactNode, useEffect } from 'react';

import useToggle from '@/hooks/useToggle';
import useLocalStorage from '@/hooks/useLocalStorage';

type DefaultUserInfo = {
  id: '';
  sub: '';
};

type LoginContextType = {
  isLogin: boolean;
  userInfo: Member | DefaultUserInfo;
  setUserInfoData: (data: Member) => void;
  setUserInfoLogout: () => void;
};

export const LoginContext = createContext<LoginContextType | null>(null);

const Login = ({ children }: { children: ReactNode }) => {
  const [isLogin, toggleIsLogin] = useToggle();
  const [userInfo, setUserInfo] = useLocalStorage<Member | DefaultUserInfo>(
    'userInfo',
    { sub: '', id: '' },
  );
  const setUserInfoData = (data: Member) => {
    toggleIsLogin(true);
    setUserInfo(data);
  };

  const setUserInfoLogout = () => {
    toggleIsLogin(false);
    setUserInfo({ sub: '', id: '' });
    localStorage.removeItem('userInfo');
  };

  useEffect(() => {
    if (
      typeof userInfo === 'object' &&
      !Array.isArray(userInfo) &&
      userInfo?.sub
    ) {
      toggleIsLogin(true);
    } else {
      toggleIsLogin(false);
    }
  }, [isLogin, toggleIsLogin, userInfo]);

  return (
    <LoginContext.Provider
      value={{ isLogin, userInfo, setUserInfoData, setUserInfoLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default Login;
