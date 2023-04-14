import { Link, useParams } from "react-router-dom";
import styled from "styled-components"
import { RowListLinks } from "."

export default function TopNavigationList() {
    const {lang} = useParams();
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
    return (
        <NavigationWrapper>
            <NavigationListLinks>
                <NavigationListItem><Link to={`/${lang}/aviasales`}><NavigationImg src="/images/icons/plane-ticket.svg" /><NavigationSpan>{links.search}</NavigationSpan></Link></NavigationListItem>
                <NavigationListItem><Link to={`/${lang}/tripinsurance`}><NavigationImg src="/images/icons/calculating.svg" /><NavigationSpan>{links.insurance}</NavigationSpan></Link></NavigationListItem>
                <NavigationListItem><Link to={`/${lang}/services/inform`}><NavigationImg src="/images/icons/list.svg" /><NavigationSpan>{links.trip}</NavigationSpan></Link></NavigationListItem>
                <NavigationListItem><Link to={`/${lang}/services/tickets`}><NavigationImg src="/images/icons/printing.svg" /><NavigationSpan>{links.get}</NavigationSpan></Link></NavigationListItem>
            </NavigationListLinks>
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
`

const NavigationListLinks = styled(RowListLinks)`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
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

    @media screen and (max-width: 740px) {
        font-size: 14px;
        line-height: 18px;
    }
`