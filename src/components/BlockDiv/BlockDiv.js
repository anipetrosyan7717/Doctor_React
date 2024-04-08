import './blockdiv.css'
import React, { useEffect } from 'react';

import { TranslationContext } from '../../App';
import publicAPI from '../../services/api/publicAPI';


export default function BlockDiv(){
    const { translation, setLanguage } = React.useContext(TranslationContext);
    const { text9, text10, text11, text12 } = translation;
return (
    <div className='blockdiv__content'>
        <div className='blockdiv__text'>
        <h1 className='blockdiv__h1'>{text9}</h1>
        <p className='underTextOrangeColor'></p>
        <p className='text10'>{text10}</p>
        <button className='blockdiv__btn'>{text11}</button>     
        <button className='blockdiv__btn1'>{text12}</button>
        </div>
    </div>
)
}
