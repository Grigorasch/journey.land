import styled from 'styled-components';
import { ColumnListLinks } from '.';

export default function AsideNavigationList() {
    const lang = localStorage.getItem('lang');
    const links = {};
    switch (lang) {
        case 'en':
            links.info = "Information Center"
            links.insurance = "Insurance case"
            links.reviews = "Reviews"
            links.faq = "FAQ"
            links.about = "About"
            break
        case 'ru':
        default:
            links.info = "Информационный центр"
            links.insurance = "Страховой случай"
            links.reviews = "Отзывы"
            links.faq = "FAQ"
            links.about = "О нас"
    }
    return (
        <nav>
            <ColumnLeftListLinks>
                <li><a href="./ru-ru/company/information/">{links.info}</a></li>
                <li></li>
                <li><a href="./ru-ru/company/case/">{links.insurance}</a></li>
                <li><a href="./ru-ru/company/reviews/">{links.reviews}</a></li>
                <li><a href="./ru-ru/company/faq/">{links.faq}</a></li>
                <li><a href="./ru-ru/company/about/">{links.about}</a></li>
            </ColumnLeftListLinks>
        </nav>
    )
}

const ColumnLeftListLinks = styled(ColumnListLinks)`
    align-items: start;
    padding-top: 15px;
`