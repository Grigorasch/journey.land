import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Banner() {
    const {lang} = useParams();
    const textContent = {};
    switch (lang) {
        case 'en':
            textContent.heading = "Where are you flying?"
            textContent.description = "We know the best places in different cities and will show you everything!"
            textContent.aviasales = "AIRLINE TICKETS AND HOTEL BOOKINGS"
            textContent.tripinsurance = "LIFE INSURANCE"
            textContent.note = "and don't forget about insurance"
            break
        case 'ru':
        default:
            textContent.heading = "Куда летите?"
            textContent.description = "Мы знаем лучшие места в разных городах и покажем вам все!"
            textContent.aviasales = "АВИАБИЛЕТЫ И БРОНИРОВАНИЕ ОТЕЛЕЙ"
            textContent.tripinsurance = "СТРАХОВКА ЖИЗНИ"
            textContent.note = "и не забудь о страховке"
    }
    return (
        <BannerContainer>
            <BannerWrapper>
                <BannerTextWrapper>
                    <BannerHeading>{textContent.heading}</BannerHeading>
                    <BannerSubheading>{textContent.description}</BannerSubheading>
                </BannerTextWrapper>
                <BannerLinksWrapper>
                    <AviasalesLink to={`/${lang}/aviasales`}>{textContent.aviasales}</AviasalesLink>
                    <BannerLinksNote>{textContent.note}</BannerLinksNote>
                    <TripinsuranceLink to={`/${lang}/tripinsurance`}>{textContent.tripinsurance}</TripinsuranceLink>
                </BannerLinksWrapper>
            </BannerWrapper>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    margin: 0 auto;
    padding: 6px;
    width: 820px;
    height: 200px;
    background: #141414;

    @media screen and (max-width: 1100px) {
        width: 700px;
    }

    @media screen and (max-width: 768px) {
        margin: 0 15px;
        width: auto;
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        align-item: center;
        height: auto;
    }
`

const BannerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 100%;
    border-radius: 10px;
    background: url(/images/icons/airplane.svg) 410px 40px/auto 160px no-repeat, #1d1d1d;

    @media screen and (max-width: 550px) {
        flex-direction: column;
        align-item: center;
        padding: 15px 30px;
    }
`

const BannerTextWrapper = styled.div`
    max-width: 500px;

    @media screen and (max-width: 550px) {
        max-width: 330px;
    }
`

const BannerHeading = styled.h2`
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;

    @media screen and (max-width: 650px) {
        font-size: 28px;
        line-height: 36px;
    }
    
    @media screen and (max-width: 450px) {
        font-size: 22px;
        line-height: 28px;
    }
`

const BannerSubheading = styled.span`
    display: block;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;

    @media screen and (max-width: 650px) {
        font-size: 20px;
        line-height: 24px;
    }

    @media screen and (max-width: 450px) {
        font-size: 16px;
        line-height: 20px;
    }
`

const BannerLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`

const BannerLink = styled(Link)`
    display: block;
    width: 180px;
    height: 60px;
    background: #2e56b7;
    border-radius: 30px;

    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`

const AviasalesLink = styled(BannerLink)`
    padding-top: 15px;

    @media screen and (max-width: 550px) {
        padding-top: 22px;
    }

    @media screen and (max-width: 400px) {
        padding-top: 15px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

const TripinsuranceLink = styled(BannerLink)`
    padding-top: 22px;
`

const BannerLinksNote = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
`