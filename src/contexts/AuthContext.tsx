import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '@/lib/storage';
import { User } from '@/types';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = storage.get('user');
    setUser(storedUser);
    setIsLoading(false);
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      // Simulate API call
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
      };
      
      // Store user data
      storage.set('user', newUser);
      setUser(newUser);
      
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to create account');
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Simulate API call
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
      };
      
      // Store user data
      storage.set('user', user);
      setUser(user);
      
      toast.success('Signed in successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Invalid email or password');
      throw error;
    }
  };

  const signOut = () => {
    storage.remove('user');
    setUser(null);
    navigate('/login');
    toast.success('Signed out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};