import React from 'react'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinkContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, 
SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebSiteRights, SocialIcons, SocialIconLink

} from './Footer.elements'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Culpa exercitation ut in pariatur eiusmod cupidatat do dolor et nisi proident esse. Sint ipsum mollit ipsum anim qui amet. Nulla quis duis aute ullamco velit magna esse ad laborum.
                </FooterSubHeading>
                <FooterSubText>
                    Descrição: Laboris veniam ea eu elit occaecat.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type='email' placeholder='Insira seu email' />
                    <Button fontBig>Se inscrever!</Button>
                    
                </Form>
            </FooterSubscription>
            <FooterLinkContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Seção 1</FooterLinkTitle>
                        <FooterLink to='/'>Link 1</FooterLink>
                        <FooterLink to='/'>Link 2</FooterLink>
                        <FooterLink to='/'>Link 3</FooterLink>
                        <FooterLink to='/'>Link 4</FooterLink>
                        <FooterLink to='/'>Link 5</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Seção 2</FooterLinkTitle>
                        <FooterLink to='/'>Link 1</FooterLink>
                        <FooterLink to='/'>Link 2</FooterLink>
                        <FooterLink to='/'>Link 3</FooterLink>
                        <FooterLink to='/'>Link 4</FooterLink>
                        <FooterLink to='/'>Link 5</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Seção 3</FooterLinkTitle>
                        <FooterLink to='/'>Link 1</FooterLink>
                        <FooterLink to='/'>Link 2</FooterLink>
                        <FooterLink to='/'>Link 3</FooterLink>
                        <FooterLink to='/'>Link 4</FooterLink>
                        <FooterLink to='/'>Link 5</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Seção 4</FooterLinkTitle>
                        <FooterLink to='/'>Link 1</FooterLink>
                        <FooterLink to='/'>Link 2</FooterLink>
                        <FooterLink to='/'>Link 3</FooterLink>
                        <FooterLink to='/'>Link 4</FooterLink>
                        <FooterLink to='/'>Link 5</FooterLink>
                    </FooterLinkItems>

                </FooterLinksWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        INSTITUIÇÃO
                    </SocialLogo>
                    <WebSiteRights>Desenvolvido por: github.com/andbmarques @ 2020</WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' arial-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
