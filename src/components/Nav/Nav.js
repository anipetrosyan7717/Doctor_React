import * as React from 'react';

import './nav.css'
import logo3 from '../logo3.png'
import logomessage from '../logomessage.png'
import logoA from '../logoA.png'
import Vector from '../Vector.png'
import EN from '../EN.png'
import RU from '../RU.png'

import { TranslationContext } from '../../App';

export default function Nav() {
    const { translation, setLanguage } = React.useContext(TranslationContext);
    const { text1, text2, text3 } = translation;

    return (
        <div className='nav__content'>
            <div className="nav__links">
                <a href="#">{text1}</a>
                <a href="#">{text2}</a>
                <a href="#">{text3}</a>           
            </div>
            <div className="nav__message">
                <img src={logo3} alt="small_3_logo" className="logo3"/>
                <img src={logomessage} alt="logomessage"  />
            </div>
            <div className="nav__doctorName">
                <img src={logoA} alt="logoA"/>


                <TranslationContext.Consumer>
                    {
                        (wholeContextValues) => {
                            const { translation: { text4 }} = wholeContextValues;

                            return <span>{text4}</span>;  
                        }
                    }
                </TranslationContext.Consumer>


                <button className='showInfo'><img  src={Vector} alt="vector"/></button>
                
            </div>
            <div className="languages">
                <button  onClick={() => setLanguage('ru')} className='btn_ru'>RU</button>
                <button  onClick={() => setLanguage('en')} className='btn_en'>EN</button>
            </div>
        </div>
    ) 
}
