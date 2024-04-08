import React from 'react'
import './footer.css'
import logo from '../logo.png'
import face from '../face.png'
import ista from '../ista.png'
import youtube from '../youtube.png'


export default function Footer(){

    return(
    <div>
       <div className='footer'>
            <div className='div_footer_1' ><img  src={logo} alt="footer_logo" />
            <p>
                 Онлай- консульации специалистов врачей, то что предлагает данный сервис.
            </p>
            <p>
                нашем веб и мобильном приложении вы найдете врачей экспертов, которые окажут вам персонализированную помощь онлайн 24/7.
            </p>
            
            
                <img  src={ista} alt="footer__istagram__icon" />
                <img  src={face} alt="footer__facebook__icon" />
                <img  src={youtube} alt="footer___youtube__icon" />
            </div>
            <div className='div_footer_2'>
                <p>Как пользоваться</p>
                <p>FAQ (ответы на вопросы)</p>
                <p>Для врачей</p>
                <p>О сервисе</p>
                <p>Контакты</p>
                <p>Пользовательское соглашение</p>
            </div>
            <div className='div_footer_3'>
                <p>Как пользоваться</p>
                <p>FAQ (ответы на вопросы)</p>
                <p>Для врачей</p>
                <p>О сервисе</p>
                <p>Контакты</p>
                <p>Пользовательское соглашение</p>   
            </div>   
        </div>      
    </div>
    )
}

