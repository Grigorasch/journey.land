import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import LanguageButton from "../Button/LanguageButton";
import { Links } from "./langData";

export default function PageFooter() {
    const { lang } = useParams();
    const links = Links[lang];
    
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
                <YearWrapper>© 2001-2023</YearWrapper>
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

    @media screen and (max-width: 850px) {
        flex-wrap: wrap;
        height: 90px;
    }

    @media screen and (max-width: 500px) {
        height: 90px;
        padding-bottom: 5px;
    }
`

const Logo = styled.img.attrs(() => ({
    alt: ""
}))`
    /* width: 30px; */
    height: 30px;

    &:not(:last-child) {
        margin-right: 25px;
    }

    @media screen and (max-width: 500px) {
        width: 15px;
        
        &:not(:last-child) {
            margin-right: 15px;
        }
    }
`

const CardSystemImg = styled.img.attrs(() => ({
    alt: ""
}))`
    height: 30px;

    &:first-child {
        /* margin-left: 10px; */
    }

    &:not(:last-child) {
        margin-right: 15px;
    }

    &:last-child {
        /* margin-right: 10px; */
    }

    @media screen and (max-width: 500px) {
        height: 20px;

        &:first-child {
            /* margin-left: 10px; */
        }

        &:not(:last-child) {
            margin-right: 10px;
        }

        &:last-child {
            /* margin-right: 10px; */
        }
    }
`

const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 55%;

    @media screen and (max-width: 850px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        flex-wrap: wrap;
        gap: 10px;
        font-size: 12px;
    }
`

const YearWrapper = styled.span`
    @media screen and (max-width: 450px) {
        flex-basis: 150px;
    }
`