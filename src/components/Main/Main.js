import './main.css'
import React from 'react'
import doctorImage from '../doctorImage.png'


import { TranslationContext } from '../../App';

export default function Main(){
    const { translation, setLanguage } = React.useContext(TranslationContext);
    const { text5, text6, text7, text8 } = translation;
    return (
        <div className='main__content'>
            <div className='main__text__content'>
                {/* take the information from here */}
                <h1 className='main_h1'>{text5}
                </h1>
                 <p className='main_p'>{text6}
                </p>
                <button className='register'>{text7}</button>
                <button className='how_is_working'>{text8}</button>
            </div>
            <div className='main__image'>
            <img src={doctorImage} className='doctor__image' alt="doctor_img"/>
            </div>
        </div>
    )
}