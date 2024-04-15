import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface DataContextValue {
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  css: string;
  setCss: React.Dispatch<React.SetStateAction<string>>;
  js: string;
  setJs: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<DataContextValue | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [html, setHtml] = useState<string>('');
  const [css, setCss] = useState<string>('');
  const [js, setJs] = useState<string>('');

  return (
    <DataContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
