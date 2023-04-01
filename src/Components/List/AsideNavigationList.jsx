import styled from 'styled-components';
import { ColumnListLinks } from '.';

export default function AsideNavigationList() {
    return (
        <nav>
            <ColumnLeftListLinks>
                <li><a href="./ru-ru/company/information/">Информационный центр</a></li>
                <li></li>
                <li><a href="./ru-ru/company/case/">Страховой случай</a></li>
                <li><a href="./ru-ru/company/reviews/">Отзывы</a></li>
                <li><a href="./ru-ru/company/faq/">FAQ</a></li>
                <li><a href="./ru-ru/company/about/">О нас</a></li>
            </ColumnLeftListLinks>
        </nav>
    )
}

const ColumnLeftListLinks = styled(ColumnListLinks)`
    align-items: start;
    padding-top: 15px;
`