import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import SocialList from "../List/SocialList";

export default function PageHeader({ burgerOnClick }) {
    const lang = useParams();
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
            <MainLink to={`/${lang}`}><HeaderLogo title={title}/></MainLink>
            <Division>
                <SocialList lang={lang}/>
            </Division>
            <BurgerButton onClick={event => burgerOnClick()}><BurgerSpan></BurgerSpan><BurgerSpan></BurgerSpan><BurgerSpan></BurgerSpan></BurgerButton>
        </Header>
    )
}

const Division = styled.div`
    flex-grow: 1;
    height: 50px;
`

const Header = styled.header`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 935px) {
        padding: 5px 0;
    }
`

const MainLink = styled(Link)`
    margin-left: 50px;

    @media screen and (max-width: 935px) {
        margin-left: 25px;
    }

    @media screen and (max-width: 480px) {
        margin-left: 0px;
    }
`

const HeaderLogo = styled.img.attrs(() => ({
    src: "/images/logo.png",
    alt: "Journey.Land",
}))`
    height: 70px;
    vertical-align: bottom;

    @media screen and (max-width: 935px) {
        height: 50px;
    }
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

    @media screen and (max-width: 1000px) {
        display: block;
    }

    @media screen and (max-width: 480px) {
        height: 34px;
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

    
    @media screen and (max-width: 480px) {
        width: 30px;
        height: 4px;
    }
`