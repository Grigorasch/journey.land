import { Link } from "react-router-dom";
import { ColumnListLinks, Div, ListImg } from ".";

export default function AviasalesList() {
    const lang = localStorage.getItem('lang');
    const links = {};
    switch (lang) {
        case 'en':
            links.search = "Search flight tickets and hotel booking";
            break
        case 'ru':
        default:
            links.search = "Поиск авиабилетов и бронирование отелей";
    }
    return (
        <Div>
            <ListImg src='/images/list/aviasales.png' backgroundColor='#000000' />
            <ColumnListLinks>
                <li><Link to={`/${lang}/aviasales`}>{links.search}</Link></li>
            </ColumnListLinks>
        </Div>
    )
}