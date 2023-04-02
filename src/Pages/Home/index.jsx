import styled from "styled-components";
import Banner from "../../Components/HomePage/Banner";
import { PageMain } from "../../Components/PageMain";

export default function Home() {
    const lang = localStorage.getItem('lang');
    const textContent = {};
    switch (lang) {
        case 'en':
            textContent.heading = "SEARCH FOR CHEAP AIR TICKETS AND TRAVEL INSURANCE"
            textContent.headingDescription = "An easy way to buy air tickets and a cheap policy, the policy is valid all over the world"
            textContent.formHeading = "Where are you flying?"
            textContent.formDescription = "We know the best places in different cities and will show you everything!"
            break
        case 'ru':
        default:
            textContent.heading = "ПОИСК ДЕШЁВЫХ АВИАБИЛЕТОВ И СТРАХОВАНИЕ ПУТЕШЕСТВЕННИКОВ"
            textContent.headingDescription = "Лёгкий способ купить авиабилеты и полис дёшево, полис действителен во всем мире"
            textContent.formHeading = "Куда летите?"
            textContent.formDescription = "Мы знаем лучшие места в разных городах и покажем вам все!"
    }
    return (
        <HomePageMain>
            <HomePageHeading>{textContent.heading}</HomePageHeading>
            <HomePageSubheading>{textContent.headingDescription}</HomePageSubheading>
            <Banner />
        </HomePageMain>
    )
}

const HomePageMain = styled(PageMain)`
    padding-top: 40px;
`

const HomePageHeading = styled.h1`
    margin: 0 auto 5px;
    max-width: 900px;
    font-size: 42px;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
    text-align: center;
`

const HomePageSubheading = styled.span`
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
`