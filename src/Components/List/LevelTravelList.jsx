import { ColumnListLinks, Div, ListImg } from ".";

export default function LevelTravelList() {
    const lang = localStorage.getItem('lang');
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
                <li><a href="./ru-ru/leveltravel/hot/">{links.hot}</a></li>
                <li><a href="./ru-ru/leveltravel/calendar/">{links.calendar}</a></li>
                <li><a href="./ru-ru/leveltravel/statistics/">{links.statistics}</a></li>
                <li><a href="./ru-ru/leveltravel/tours/">{links.tours}</a></li>
                <li><a href="./ru-ru/leveltravel/hotels/">{links.hotel}</a></li>
                <li><a href="./ru-ru/leveltravel/main/">{links.home}</a></li>
            </ColumnListLinks>
        </Div>
    )
}