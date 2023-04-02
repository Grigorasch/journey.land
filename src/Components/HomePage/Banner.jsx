import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Banner() {
    const lang = localStorage.getItem('lang');
    const textContent = {};
    switch (lang) {
        case 'en':
            textContent.heading = "Where are you flying?"
            textContent.description = "We know the best places in different cities and will show you everything!"
            textContent.aviasales = "AIRLINE TICKETS AND HOTEL BOOKINGS"
            textContent.tripinsurance = "LIFE INSURANCE"
            break
        case 'ru':
        default:
            textContent.heading = "Куда летите?"
            textContent.description = "Мы знаем лучшие места в разных городах и покажем вам все!"
            textContent.aviasales = "АВИАБИЛЕТЫ И БРОНИРОВАНИЕ ОТЕЛЕЙ"
            textContent.tripinsurance = "СТРАХОВКА ЖИЗНИ"
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
                    <BannerLinksNote>и нс забудь о страховке</BannerLinksNote>
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
`

const BannerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 100%;
    border-radius: 10px;
    background: url(/images/icons/airplane.svg) 410px 40px/auto 160px no-repeat, #1d1d1d;
`

const BannerTextWrapper = styled.div`
    max-width: 500px;
`

const BannerHeading = styled.h2`
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
`

const BannerSubheading = styled.span`
    display: block;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
`

const BannerLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
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
`

const AviasalesLink = styled(BannerLink)`
    padding-top: 15px;
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