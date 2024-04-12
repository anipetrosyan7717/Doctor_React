import * as React from 'react';

import Main from '../components/Main/Main';
import BlockDiv from '../components/BlockDiv/BlockDiv';
import DoctorList from '../components/DoctorList/DoctorList';

export default function Preview () {
    return (
        <>
            <Main/>
            <BlockDiv/>
            <DoctorList/>
        </>
    );
};
