import React from 'react';
import type { TextStyle } from 'react-native';

export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    text?: string;
    bg?: string;
  };
  layout: {
    padding: number;
    radius: number;
  };
  text: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    title: number;
    subtitle: number;
    default: number;
    align: string;
    boldness: TextStyle['fontWeight'];
    bold: TextStyle['fontWeight'];
  };
}

const defaultTheme: ThemeType = {
  colors: {
    primary: 'slateblue',
    secondary: 'white',
    text: 'black',
  },
  layout: {
    padding: 10,
    radius: 20,
  },
  text: {
    h1: 40,
    h2: 30,
    h3: 25,
    h4: 20,
    h5: 15,
    title: 35,
    subtitle: 20,
    default: 18,
    align: 'right',
    boldness: '500',
    bold: 'bold',
  },
};

export const themes = {
  light: defaultTheme,
  dark: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: 'white',
      secondary: 'black',
      text: 'white',
      bg: 'black',
    },
  },
};

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({
  children,
  theme = themes.light,
}: {
  children: React.ReactChild;
  theme?: ThemeType;
}) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
