import './doctorlist.css'
import React, { useEffect, useState } from 'react'
import doctorface from '../doctorface.png'

import { TranslationContext } from '../../App';

export default function DoctorList(){
    const { translation } = React.useContext(TranslationContext);
    const { status = {}} = translation;

   
    const doctors = [
        {id:"1",name:"Ольга Никитина",position:"pediatr",year:"12",status:"future"},
        {id:"2",name:"Natasha Кузнецов",position:"pediatr",year:"12",status:"past"},
        {id:"3",name:"Любовь Михайлов",position:"pediatr",year:"12",status:"future"},
        {id:"4",name:"Надежда Морозов",position:"pediatr",year:"12",status:"past"},
        {id:"5",name:"Оксана Лебедев",position:"pediatr",year:"12",status:"cancelled"},
        {id:"6",name:"Мария Алексеев",position:"pediatr",year:"12",status:"future"},
        {id:"7",name:"Люся Попов",position:"pediatr",year:"12",status:"cancelled"},
        {id:"8",name:"Нелли Иванов",position:"pediatr",year:"12",status:"future"},
        {id:"9",name:"Ника Васильев",position:"pediatr",year:"12",status:"cancelled"},
        {id:"10",name:"Марта Волков",position:"pediatr",year:"12",status:"past"}
    ]

    // const getuttonProps = (btnStatus) => {
    //     return {
    //         onClick: () => setselectedStatus(btnStatus),
    //         className: selectedStatus === btnStatus ? 'active': '',
    //     };
    // };


   
   
    return (
        <div className='doctorlist'>
            <div className='status'>
                <button>{status.cancelled}</button>
                <button>{status.future}</button>
                <button>{status.past}</button>
            </div>
            <div className='doctorCard'>
                {
                    doctors.map(selected =>(
                        <div className='doctor_block' >
                            <img src={doctorface} alt="doctor_face" className='doctor_img'/>
                                <h2>{selected.name}</h2>
                                <p>{selected.position}</p>
                                <p>{selected.year}</p>
                                <button>{selected.status}</button>
                              
                        </div>
                    ))
                }
            </div>
        </div>

    )
}