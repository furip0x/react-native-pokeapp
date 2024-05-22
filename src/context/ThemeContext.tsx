import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
  children: ReactNode;
}

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
  useSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
  useSystemTheme: () => {},
});

export const ThemeProvider = ({children}: IProps) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(colorScheme || 'dark');

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme as Theme);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  useEffect(() => {
    if (colorScheme) {
      setTheme(colorScheme);
    }
  }, [colorScheme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
  };

  const useSystemTheme = () => {
    if (colorScheme) {
      setTheme(colorScheme);
      AsyncStorage.setItem('theme', colorScheme);
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, useSystemTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
