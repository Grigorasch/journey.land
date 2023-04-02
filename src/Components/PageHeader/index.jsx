import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialList from "../List/SocialList";

export default function PageHeader() {
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
        </Header>
    )
}

const Division = styled.div`
    flex-grow: 1;
`

const Header = styled.header`
    display: flex;
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