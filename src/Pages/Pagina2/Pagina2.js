import React from 'react'
import {InfoSection, Lista} from '../../Components'
import {homeObjTwo, homeObjThree, homeObjFour} from './Data'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Home = () => {
    return (
        <>
            <ScrollToTop />
            <InfoSection {...homeObjTwo}/>
            <Lista />
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Home
