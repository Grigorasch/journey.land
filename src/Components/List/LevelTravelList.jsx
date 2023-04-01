import { ColumnListLinks, Div, ListImg } from ".";

export default function LevelTravelList() {
    return (
        <Div>
            <ListImg src='./images/list/level-travel.png' />
            <ColumnListLinks>
                <li><a href="./ru-ru/leveltravel/hot/">Горящие туры</a></li>
                <li><a href="./ru-ru/leveltravel/calendar/">Календарь лучших цен</a></li>
                <li><a href="./ru-ru/leveltravel/statistics/">Статистика цен</a></li>
                <li><a href="./ru-ru/leveltravel/tours/">Поиск туров</a></li>
                <li><a href="./ru-ru/leveltravel/hotels/">Поиск отелей</a></li>
                <li><a href="./ru-ru/leveltravel/main/">Главная</a></li>
            </ColumnListLinks>
        </Div>
    )
}