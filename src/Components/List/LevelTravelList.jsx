import { useParams } from "react-router-dom";
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
                <li><a href={`./${lang}/leveltravel/hot/`}>{links.hot}</a></li>
                <li><a href={`./${lang}/leveltravel/calendar/`}>{links.calendar}</a></li>
                <li><a href={`./${lang}/leveltravel/statistics/`}>{links.statistics}</a></li>
                <li><a href={`./${lang}/leveltravel/tours/`}>{links.tours}</a></li>
                <li><a href={`./${lang}/leveltravel/hotels/`}>{links.hotel}</a></li>
                <li><a href={`./${lang}/leveltravel/main/`}>{links.home}</a></li>
            </ColumnListLinks>
        </Div>
    )
}