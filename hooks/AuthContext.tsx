import React, { useEffect, useState, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoginMutation, useLogoutMutation } from '@/redux/authApi';
import { ILoginRequest, ILoginResponse } from '@/types/authTypes';

type User = ILoginResponse | null;

type AuthContextType = {
  user: User;
  login: (credentials: ILoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const [loginApi] = useLoginMutation();
  const [logoutApi] = useLogoutMutation();

  useEffect(() => {
    const loadUserFromStorage = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    loadUserFromStorage();
  }, []);

  const login = async (credentials: ILoginRequest) => {
    try {
      const response = await loginApi(credentials).unwrap();
      setUser(response);
      await AsyncStorage.setItem('user', JSON.stringify(response));
    } catch (error: any) {
      // console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutApi().unwrap();
      setUser(null);
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthContext };
