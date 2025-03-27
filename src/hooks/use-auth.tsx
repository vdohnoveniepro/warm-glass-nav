
import React, { createContext, useContext, useState, useEffect } from 'react';

// Типы пользователей
export type UserRole = 'user' | 'specialist' | 'admin';

export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  role: UserRole;
  telegramId?: string;
}

// Интерфейс контекста аутентификации
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  loginWithTelegram: () => void;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

// Создаем контекст аутентификации
const AuthContext = createContext<AuthContextType | null>(null);

// Провайдер аутентификации
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Инициализация - проверка сохраненной сессии
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Проверяем, есть ли сохраненный пользователь в localStorage
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (err) {
        console.error('Ошибка проверки статуса аутентификации:', err);
        setError('Ошибка аутентификации');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);
  
  // Функция для входа через Telegram
  const loginWithTelegram = () => {
    // Токен бота Telegram
    const botToken = '7365896423:AAF9RJwe0SOD-Guh68ei7k_ccGYWusyHIs4';
    
    // В реальном приложении здесь была бы интеграция с Telegram Login Widget
    // Поскольку это пример, мы просто симулируем вход пользователя через Telegram
    
    setLoading(true);
    
    // Имитация успешного входа через Telegram
    setTimeout(() => {
      const mockUser: User = {
        id: 'tg_123456',
        name: 'Пользователь Telegram',
        avatar: 'https://via.placeholder.com/150',
        role: 'user',
        telegramId: '123456789'
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setLoading(false);
    }, 1000);
  };
  
  // Функция для входа по электронной почте и паролю
  const loginWithEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Здесь должен быть запрос к API для аутентификации
      // Имитация запроса
      if (email && password) {
        const mockUser: User = {
          id: 'email_123456',
          name: email.split('@')[0],
          email,
          role: 'user'
        };
        
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Неверный email или пароль');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Произошла ошибка при входе');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Функция для входа через Google
  const loginWithGoogle = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Здесь должна быть интеграция с Google OAuth
      // Имитация успешного входа
      
      const mockUser: User = {
        id: 'google_123456',
        name: 'Пользователь Google',
        email: 'user@gmail.com',
        avatar: 'https://via.placeholder.com/150',
        role: 'user'
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Произошла ошибка при входе через Google');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Функция для регистрации
  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Здесь должен быть запрос к API для регистрации
      // Имитация запроса
      if (name && email && password) {
        const mockUser: User = {
          id: 'reg_' + Date.now().toString(),
          name,
          email,
          role: 'user'
        };
        
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Пожалуйста, заполните все поля');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Произошла ошибка при регистрации');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Функция для выхода
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  // Предоставляем контекст аутентификации
  const value = {
    user,
    loading,
    error,
    loginWithTelegram,
    loginWithEmail,
    loginWithGoogle,
    logout,
    register
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Хук для использования контекста аутентификации
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
