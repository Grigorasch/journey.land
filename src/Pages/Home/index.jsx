import { useParams } from "react-router";
import styled from "styled-components";
import Banner from "../../Components/HomePage/Banner";
import Card from "../../Components/HomePage/Card";
import { CardContent } from "../../Components/HomePage/CardContent";
import { PageMain } from "../../Components/PageMain";

export default function Home() {
    const { lang } = useParams();
    const textContent = {};
    
    switch (lang) {
        case 'en':
            document.title = 'Home Page | Jorney Land';
            textContent.heading = "SEARCH FOR CHEAP AIR TICKETS AND TRAVEL INSURANCE"
            textContent.headingDescription = "An easy way to buy air tickets and a cheap policy, the policy is valid all over the world"
            textContent.formHeading = "Where are you flying?"
            textContent.formDescription = "We know the best places in different cities and will show you everything!"
            break
        case 'ru':
        default:
            document.title = 'Главная | Jorney Land';
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
            <CardsContainer>
                {CardContent.map((item, index) => {
                    return (
                        <Card
                            key={Math.random().toString(36).substr(2, 9)}
                            heading={item[`${lang}Heading`]}
                            description={item[`${lang}Description`]}
                            image={item.image}
                            index={index} />
                    )
                })}
            </CardsContainer>
        </HomePageMain>
    )
}

const HomePageMain = styled(PageMain)`
    padding-top: 40px;

    @media screen and (max-width: 450px) {
        padding-top: 20px;
    }
`

const HomePageHeading = styled.h1`
    margin: 0 auto 5px;
    max-width: 900px;
    font-size: 42px;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 1200px) {
        max-width: 700px;
        font-size: 36px;
        line-height: 42px;
    }

    @media screen and (max-width: 650px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media screen and (max-width: 450px) {
        margin: 0 15px 5px;
        font-size: 22px;
        line-height: 28px;
    }
`

const HomePageSubheading = styled.span`
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 16px;
        line-height: 18px;
    }

    @media screen and (max-width: 450px) {
        margin: 0 20px 5px;
        font-size: 14px;
        line-height: 18px;
    }
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    gap: 20px;

    // margin-top: 20px;
    margin: 20px auto;
    width: 820px;

    @media screen and (max-width: 1100px) {
        width: 700px;
    }

    @media screen and (max-width: 768px) {
        margin: 20px 15px;
        width: auto;
    }
`