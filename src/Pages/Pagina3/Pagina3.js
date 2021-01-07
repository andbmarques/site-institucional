import React from 'react'
import {InfoSection, Lista} from '../../Components'
import {homeObjThree, homeObjFour} from './Data'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Pagina3 = () => {
    return (
        <>
            <ScrollToTop />
            <Lista />
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Pagina3
