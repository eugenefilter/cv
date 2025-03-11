import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { LanguageItems, Item } from './interface';
import initialLanguageItems from './initialLanguageItems';
import { DataStructure } from './interface';

const localization = 'en';

interface DataContextType {
  languageItems: LanguageItems;
  languages:  string[];
  language: keyof DataStructure | null;
  setLanguage: (language: keyof DataStructure) => void;
  //setLanguage: React.Dispatch<React.SetStateAction<'en' | null>>;
  updateItem: (key: keyof LanguageItems, item: Item) => void;
}

const initialLanguageItemsDefault: DataContextType = {
  languageItems: initialLanguageItems,
  language: localization,
  languages: [localization],
  setLanguage: () => { },
  updateItem: () => { },
};

export const DataContext = createContext<DataContextType>(initialLanguageItemsDefault);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataStructure | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  const [language, setLanguage] = useState<keyof DataStructure | null>(localization);
  const [languageItems, setLanguageItems] = useState<LanguageItems>(initialLanguageItems);

  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        console.log(data, language);
        setData(data.items);

        if (!language) setLanguageItems(initialLanguageItems);
        else {
          setLanguageItems(data.items[language]);
          setLanguages(Object.keys(data.items));
        }
      });
  }, []);

  useEffect(() => {
    if (data) {
      setLanguageItems(data[language ?? localization]);
    }
  }, [language, data]);

  const updateItem = (key: keyof LanguageItems, newItem: Item) => {
    if (!data || !language) return;

    setData((prevData) => {
      if (!prevData) return prevData;

      const updatedLanguageItems = {
        ...prevData[language],
        [key]: newItem,
      };

      return {
        ...prevData,
        [language]: updatedLanguageItems,
      };
    });

    setLanguageItems((prevItems) => {
      if (!prevItems) return prevItems;
      return {
        ...prevItems,
        [key]: newItem,
      };
    });
  };

  const value = {
    languageItems,
    languages,
    language,
    setLanguage,
    updateItem,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};