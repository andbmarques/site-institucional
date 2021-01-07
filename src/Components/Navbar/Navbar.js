import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleCLick = () => {
        setClick(!click)
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                 <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        INSTITUIÇÃO
                    </NavLogo>
                    <MobileIcon
                        onClick={handleCLick}
                    >
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleCLick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Pagina 1
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/pagina2'>
                                Pagina 2
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/pagina3'>
                                Pagina 3
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/pagina4'>
                                    <Button primary>Pagina 4</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/pagina4'>
                                    <Button fontBig primary>
                                        Pagina 4
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                    
                 </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar