import * as React from 'react';

import './nav.css'
import logo3 from '../logo3.png'
import logomessage from '../logomessage.png'
import logoA from '../logoA.png'
import Vector from '../Vector.png'
import EN from '../EN.png'
import RU from '../RU.png'
import { useTranslation } from 'react-i18next';

// import { TranslationContext } from '../../App';


// const LanguageSelector = () => {
//     const { i18n } = useTranslation()
//     const changeLanguage = (lng) => {
//         i18n.changeLanguage(lng)
//     }
//     return (
//         <div className='btn-container'>
//             {LanguageSelector.map((lng) => {
//                 return (
//                     <button className={lng.code === i18n.language ? "selected" : ""} key={lng.code} onClick={() => changeLanguage()}>
//                         {lng.lang}
//                     </button>
//                 )
//             })}
//         </div>
//     )
// }

export default function Nav() {
    // const { translation, setLanguage } = React.useContext(TranslationContext);
    // const { text1, text2, text3 } = translation;
    const { t, i18n } = useTranslation();

    return (
        <div className='nav__content'>
            <div className="nav__links">
                <a href="#">{t("text1")}</a>
                <a href="#">{t("text2")}</a>
                <a href="#">{t("text3")}</a>
            </div>
            <div className="nav__message">
                <img src={logo3} alt="small_3_logo" className="logo3" />
                <img src={logomessage} alt="logomessage" />
            </div>
            <div className="nav__doctorName">
                <img src={logoA} alt="logoA" />
                <span>{t("text4")}</span>;

                {/* <TranslationContext.Consumer>
                    {
                        (wholeContextValues) => {
                            const { translation: { text4 }} = wholeContextValues;

                            return <span>{t("text4")}</span>;  
                        }
                    }
                </TranslationContext.Consumer> */}


                <button className='showInfo'><img src={Vector} alt="vector" /></button>

            </div>
            <div className="languages">
                <button  onClick={() => i18n.changeLanguage('ru')} className='btn_ru'>RU</button>
                <button  onClick={() => i18n.changeLanguage('en')} className='btn_en'>EN</button>
            </div>
    
        </div>
    )
}
