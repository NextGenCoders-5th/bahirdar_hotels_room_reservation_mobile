import React, { createContext, useContext, useState } from 'react';

import {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} from '@/redux/authApi';
import {
  IAuthResponse,
  ILoginRequest,
  ISignupRequest,
} from '@/types/authTypes';

interface AuthContextProps {
  user: IAuthResponse | null;
  login: (credentials: ILoginRequest) => Promise<void>;
  signup: (userData: ISignupRequest) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IAuthResponse | null>(null);
  const [loginMutation] = useLoginMutation();
  const [signupMutation] = useSignupMutation();
  const [logoutMutation] = useLogoutMutation();

  const login = async (credentials: ILoginRequest) => {
    const response = await loginMutation(credentials).unwrap();
    setUser(response.data);
  };

  const signup = async (userData: ISignupRequest) => {
    const response = await signupMutation(userData).unwrap();
    setUser(response.data);
  };

  const logout = async () => {
    await logoutMutation().unwrap();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        // isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
