import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialList from "../List/SocialList";

export default function PageHeader({ burgerOnClick }) {
    const lang = localStorage.getItem('lang');
    let title;
    switch (lang) {
        case 'en':
            title = "On Home Page";
            break
        case 'ru':
        default:
            title = "На Главную";
    }
    return (
        <Header>
            <MainLink to="/"><HeaderLogo title={title}/></MainLink>
            <Division>
                <SocialList lang={lang}/>
            </Division>
            <BurgerButton onClick={event => burgerOnClick()}><BurgerSpan></BurgerSpan><BurgerSpan></BurgerSpan><BurgerSpan></BurgerSpan></BurgerButton>
        </Header>
    )
}

const Division = styled.div`
    flex-grow: 1;
`

const Header = styled.header`
    display: flex;
    align-items: center;
`

const MainLink = styled(Link)`
    margin-left: 50px;
`

const HeaderLogo = styled.img.attrs(() => ({
    src: "/images/logo.png",
    alt: "Journey.Land",
}))`
    height: 70px;
    vertical-align: bottom;
`

const BurgerButton = styled.button`
    display: none;
    
    padding: 5px;
    flex-shrink: 0;
    height: 46px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4980392157);
    border: none;
    border-radius: 5px;

    @media screen and (max-width: 1100px) {
        display: block;
    }
`

const BurgerSpan = styled.span`
    display: block;
    width: 50px;
    height: 8px;
    background: #1972de;
    border-radius: 5px;

    &:not(:last-child) {
        margin-bottom: 6px;
    }
`