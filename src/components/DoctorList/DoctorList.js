import './doctorlist.css'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import doctorface from '../doctorface.png'
import { Link } from 'react-router-dom';

import { TranslationContext } from '../../App';


const medicalEventStatus = {
    past: 'past',
    future: 'future',
    cancelled: 'cancelled',
};

export default function DoctorList() {
    const { translation } = React.useContext(TranslationContext);
    const { status = {} } = translation;


    const doctors = [
        { id: "1", name: "Ольга Никитина", position: "pediatr", year: "12", status: "future" },
        { id: "2", name: "Natasha Кузнецов", position: "pediatr", year: "10", status: "past" },
        { id: "3", name: "Любовь Михайлов", position: "pediatr", year: "13", status: "future" },
        { id: "4", name: "Надежда Морозов", position: "pediatr", year: "8", status: "past" },
        { id: "5", name: "Оксана Лебедев", position: "pediatr", year: "14", status: "cancelled" },
        { id: "6", name: "Мария Алексеев", position: "pediatr", year: "6", status: "future" },
        { id: "7", name: "Люся Попов", position: "pediatr", year: "22", status: "cancelled" },
        { id: "8", name: "Нелли Иванов", position: "pediatr", year: "15", status: "future" },
        { id: "9", name: "Ника Васильев", position: "pediatr", year: "9", status: "cancelled" },
        { id: "10", name: "Марта Волков", position: "pediatr", year: "14", status: "past" }
    ]

    const [selectedStatus, setSelectedStatus] = useState(medicalEventStatus.future);


    const getuttonProps = (btnStatus) => {
        console.log(selectedStatus, btnStatus);
        return {
            onClick: () => setSelectedStatus(btnStatus),
            className: selectedStatus === btnStatus ? 'active': '', 

        };
    };
 

    return (
        <div className='doctorlist'>
            <div className='status'>
                <button {...getuttonProps(medicalEventStatus.future)}>{status.future}</button>
                <button {...getuttonProps(medicalEventStatus.cancelled)}>{status.cancelled}</button>
                <button {...getuttonProps(medicalEventStatus.past)}>{status.past}</button>
            </div>
            <div className='doctorCard'>
                {
                    doctors.map(doctor => doctor.status === selectedStatus && (
                        <div className='doctor_block' >
                            <img src={doctorface} alt="doctor_face" className='doctor_img' />
                            <Link to={`/doctor/${doctor.id}`}>
                                <h3>{doctor.name}</h3>
                            </Link>
                            <p>{doctor.position}</p>
                            <p>{doctor.year}</p>
                            <div className={`doctor-status-name ${doctor.status}`}>{status[doctor.status]}</div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}




