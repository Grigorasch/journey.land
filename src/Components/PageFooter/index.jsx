import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import LanguageButton from "../Button/LanguageButton";

export default function PageFooter() {
    const { lang } = useParams();
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
                <Logo src="/images/icons/android.svg" />
                <Logo src="/images/icons/apple.svg" />
            </div>
            <div>
                <CardSystemImg src="/images/icons/visa.png" />
                <CardSystemImg src="/images/icons/mastercard.svg" />
                <CardSystemImg src="/images/icons/mir.png" />
            </div>
            <LinksWrapper>
                <Link to={`/${lang}/company/magazine`}>{links.magazine}</Link>
                <Link to={`/${lang}/company/job`}>{links.job}</Link>
                <Link to={`/${lang}/company/help`}>{links.help}</Link>
                <span>© 2001-2023</span>
                <Logo src={`/images/icons/${lang}-flag.svg`} alt="Переключатель языка" />
                <LanguageButton />
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

const Logo = styled.img.attrs(() => ({
    alt: ""
}))`
    width: 30px;

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