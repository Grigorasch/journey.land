import styled from "styled-components"
import { RowListLinks } from "."

export default function TopNavigationList() {
    return (
        <NavigationWrapper>
            <NavigationListLinks>
                <li><a href="./ru-ru/aviasales/"><NavigationImg src="/images/icons/plane-ticket.svg" /><NavigationSpan>Поиск авиабилетов и бронирование отелей</NavigationSpan></a></li>
                <li><a href="./ru-ru/tripinsurance/"><NavigationImg src="/images/icons/calculating.svg" /><NavigationSpan>Рассчитайте онлайн стоимость полиса</NavigationSpan></a></li>
                <li><a href="./ru-ru/information/"><NavigationImg src="/images/icons/list.svg" /><NavigationSpan>Введите данные о вашей поездке</NavigationSpan></a></li>
                <li><a href="./ru-ru/documentation/"><NavigationImg src="/images/icons/printing.svg" /><NavigationSpan>Получите полис, авиабилет и бронь в отели на e-mail</NavigationSpan></a></li>
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
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: start;
`