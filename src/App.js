import './App.css';
import React, { createContext,useContext,useState} from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import BlockDiv from './components/BlockDiv/BlockDiv'

export const TranslationContext = React.createContext({});

export const TranslationProvider = ({children}) => {
    const [translation, setTranslation] = React.useState({});

    const setLanguage = async (language) => {
      const translationSource = await import(`./translation/lang.${language}.json`);

      setTranslation(translationSource);
    };

    React.useEffect(() => {
      setLanguage('ru');  
    }, []);

    return (
        <TranslationContext.Provider value={{translation, setLanguage}}>
            {children}
        </TranslationContext.Provider>
    );
};

export default function App() {

  return (
    <div className="App">
      <TranslationProvider>
        <Header />
        <Main />
        <BlockDiv />
      </TranslationProvider>
    </div>
  );
}
