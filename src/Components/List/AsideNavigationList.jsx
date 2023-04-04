import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ColumnListLinks } from '.';

export default function AsideNavigationList() {
    const { lang } = useParams();
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
                <li><Link to={`/${lang}/company/info`}>{links.info}</Link></li>
                <li></li>
                <li><Link to={`/${lang}/company/insurance`}>{links.insurance}</Link></li>
                <li><Link to={`/${lang}/company/reviews`}>{links.reviews}</Link></li>
                <li><Link to={`/${lang}/company/faq`}>{links.faq}</Link></li>
                <li><Link to={`/${lang}/company`}>{links.about}</Link></li>
            </ColumnLeftListLinks>
        </nav>
    )
}

const ColumnLeftListLinks = styled(ColumnListLinks)`
    align-items: start;
    padding-top: 15px;
`