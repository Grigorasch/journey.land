import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PageFooter() {
    const lang = localStorage.getItem('lang');
    const links = {};
    switch (lang) {
        case 'en':
            links.magazine = "Magazine"
            links.job = "Jobs"
            links.help = "Help & Support"
            break
        case 'ru':
        default:
            links.magazine = "Журнал"
            links.job = "Вакансии"
            links.help = "Справка и Поддержка"
    }
    return (
        <Footer>
            <div>
                <PhoneSystemImg src="/images/icons/android.svg" />
                <PhoneSystemImg src="/images/icons/apple.svg" />
            </div>
            <div>
                <CardSystemImg src="/images/icons/visa.png" />
                <CardSystemImg src="/images/icons/mastercard.svg" />
                <CardSystemImg src="/images/icons/mir.png" />
            </div>
            <LinksWrapper>
                <Link to={`/${localStorage.getItem('lang') || lang}/company/magazine`}>{links.magazine}</Link>
                <Link to={`/${localStorage.getItem('lang') || lang}/company/job`}>{links.job}</Link>
                <Link to={`/${localStorage.getItem('lang') || lang}/company/help`}>{links.help}</Link>
                <span>© 2001-2023</span>
            </LinksWrapper>
        </Footer>
    )
}

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 65px;
    font-size: 14px;
    font-weight: 700;
    border-top: 2px solid rgb(79, 76, 78);
`

const PhoneSystemImg = styled.img.attrs(() => ({
    alt: ""
}))`
    width: 20px;

    &:not(:last-child) {
        margin-right: 25px;
    }
`

const CardSystemImg = styled.img.attrs(() => ({
    alt: ""
}))`
    height: 30px;

    &:first-child {
        margin-left: 10px;
    }

    &:not(:last-child) {
        margin-right: 15px;
    }

    &:last-child {
        margin-right: 10px;
    }
`

const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 55%;
`