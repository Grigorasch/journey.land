import { Link, useParams } from "react-router-dom";
import { ColumnListLinks, Div, ListImg } from ".";

export default function LevelTravelList() {
    const { lang } = useParams();
    const links = {};
    switch (lang) {
        case 'en':
            links.hot = "Hot tours"
            links.calendar = "Best price calendar"
            links.statistics = "Price statistics"
            links.tours = "Search tours"
            links.hotel = "Hotels search"
            links.home = "Home"
            break
        case 'ru':
        default:
            links.hot = "Горящие туры"
            links.calendar = "Календарь лучших цен"
            links.statistics = "Статистика цен"
            links.tours = "Поиск туров"
            links.hotel = "Поиск отелей"
            links.home = "Главная"
    }
    return (
        <Div>
            <ListImg src='/images/list/level-travel.png' />
            <ColumnListLinks>
                <li><Link to={`/${lang}/leveltravel/hot/`}>{links.hot}</Link></li>
                <li><Link to={`/${lang}/leveltravel/calendar/`}>{links.calendar}</Link></li>
                <li><Link to={`/${lang}/leveltravel/statistics/`}>{links.statistics}</Link></li>
                <li><Link to={`/${lang}/leveltravel/tours/`}>{links.tours}</Link></li>
                <li><Link to={`/${lang}/leveltravel/hotels/`}>{links.hotel}</Link></li>
                <li><Link to={`/${lang}/leveltravel/`}>{links.home}</Link></li>
            </ColumnListLinks>
        </Div>
    )
}