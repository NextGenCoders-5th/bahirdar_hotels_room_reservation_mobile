import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextData {
  user: any | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  // Add other auth-related functions here
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);

  const signIn = async (email: string, password: string) => {
    // Implement sign in logic here
    // For now, we'll just set a dummy user
    setUser({ id: '1', email });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
