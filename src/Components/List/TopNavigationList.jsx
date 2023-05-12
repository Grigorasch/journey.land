import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components"
import { RowListLinks } from "."

export default function TopNavigationList() {
    const { lang } = useParams();
    const [isNavigationVisible, setNavigationVisible] = useState(false);
    const links = {};
    switch (lang) {
        case 'en':
            links.search = "Search flight tickets and hotel booking"
            links.insurance = "Calculate the cost of the policy online"
            links.trip = "Enter your trip details"
            links.get = "Get a policy, air ticket and hotel reservations by e-mail"
            break
        case 'ru':
        default:
            links.search = "Поиск авиабилетов и бронирование отелей"
            links.insurance = "Рассчитайте онлайн стоимость полиса"
            links.trip = "Введите данные о вашей поездке"
            links.get = "Получите полис, авиабилет и бронь в отели на e-mail"
    }

    useEffect(() => {
        console.log(isNavigationVisible);
        if (isNavigationVisible) {

        } else {

        }
    }, [isNavigationVisible]);
    return (
        <NavigationWrapper isNavigationVisible={isNavigationVisible}>
            <NavigationListLinks isNavigationVisible={isNavigationVisible}>
                <NavigationListItem><Link to={`/${lang}/aviasales`}><NavigationImg src="/images/icons/plane-ticket.svg" /><NavigationSpan>{links.search}</NavigationSpan></Link></NavigationListItem>
                <NavigationListItem><Link to={`/${lang}/tripinsurance`}><NavigationImg src="/images/icons/calculating.svg" /><NavigationSpan>{links.insurance}</NavigationSpan></Link></NavigationListItem>
                <NavigationListItem><Link to={`/${lang}/services/inform`}><NavigationImg src="/images/icons/list.svg" /><NavigationSpan>{links.trip}</NavigationSpan></Link></NavigationListItem>
                <NavigationListItem><Link to={`/${lang}/services/tickets`}><NavigationImg src="/images/icons/printing.svg" /><NavigationSpan>{links.get}</NavigationSpan></Link></NavigationListItem>
            </NavigationListLinks>
            <NavigationVisibleButton onClick={event => setNavigationVisible(value => !value)} isNavigationVisible={isNavigationVisible}>Открть</NavigationVisibleButton>
        </NavigationWrapper>
    )
}

const NavigationWrapper = styled.nav`
    height: 50px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    border-bottom: 2px solid #4f4c4e;
    overflow: hidden;
    transition: 0.3s;

    @media screen and (max-width: 800px) {
        height: ${props => props.isNavigationVisible ? '220px' : '30px'};
    }
`

const NavigationListLinks = styled(RowListLinks)`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        top: ${props => props.isNavigationVisible ? '5px' : '-180px'};
        transform: none;
    }
`

const NavigationListItem = styled.li`
    white-space: nowrap;
`

// const Navi

const NavigationImg = styled.img.attrs(() => ({
    alt: ""
}))`
    margin-right: 10px;
    width: 2em;
    height: 2em;
    vertical-align: baseline;
`

const NavigationSpan = styled.span`
    display: inline-block;
    width: 80%;
    white-space: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: start;

    @media screen and (max-width: 1200px) {
        width: 75%;
        font-size: 12px;
    }

    @media screen and (max-width: 800px) {
        font-size: 14px;
        line-height: 18px;
    }
`

const NavigationVisibleButton = styled.button`
    display: none;
    margin: 0 auto;
    width: 35px;
    height: 25px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s, transform 0.2s 0.3s;

    &::before, &::after {
        content: "";
        position: absolute;
        top: 20px;
        left: 50%;
        width: 25px;
        height: 4px;
        background: #4f4c4e;
        transform-origin: left;
        cursor: pointer;
    }

    &::before {
        transform: rotate(-45deg);
    }

    &::after {
        transform: rotate(-135deg);
    }

    @media screen and (max-width: 800px) {
        display: block;
        position: relative;
        top: ${props => props.isNavigationVisible ? '15px' : '-168px'};
        transform: rotate(${props => props.isNavigationVisible ? '180deg' : '0'});
    }
`