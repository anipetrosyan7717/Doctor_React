import './App.css';
import React, { useTransition } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import BlockDiv from './components/BlockDiv/BlockDiv'
import DoctorList from './components/DoctorList/DoctorList';
import Footer from './components/Footer/Footer';
import { Routes, Route, Link } from 'react-router-dom'
import DoctorInfo from './screens/DoctorInfo';
import Preview from './screens/Preview';


// export const TranslationContext = React.createContext({});

// export const TranslationProvider = ({ children }) => {
//   const [translation, setTranslation] = React.useState({});

//   const setLanguage = async (language) => {
//     const translationSource = await import(`./translation/lang.${language}.json`);


//     setTranslation(translationSource);
//   };

//   React.useEffect(() => {
//     setLanguage('ru');
//   }, []);

//   return (
//     <TranslationContext.Provider value={{ translation, setLanguage }}>
//       {children}
//     </TranslationContext.Provider>
//   );
// };

export default function App() {
  const { t } = useTransition()
  return (
    <div className="App">
      {/* <TranslationProvider> */}
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Preview />} />
            <Route path='doctor/:id' element={<DoctorInfo />} />
          </Route>
        </Routes>
        <Footer />
      {/* </TranslationProvider> */}
    </div>
  )
}
