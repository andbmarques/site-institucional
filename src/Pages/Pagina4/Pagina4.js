import React from 'react'
import {InfoSection} from '../../Components'
import {homeObjFour} from './Data'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Pagina4 = () => {
    return (
        <>
            <ScrollToTop />  
            <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Pagina4
