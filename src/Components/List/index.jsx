import styled from 'styled-components';

export function LevelTravelList() {
    return (
        <div>
            <ListImg src='./images/List/level-travel.png' />
            <ColumnListLinks>
                <li><a href="./ru-ru/leveltravel/hot/">Горящие туры</a></li>
                <li><a href="./ru-ru/leveltravel/calendar/">Календарь лучших цен</a></li>
                <li><a href="./ru-ru/leveltravel/statistics/">Статистика цен</a></li>
                <li><a href="./ru-ru/leveltravel/tours/">Поиск туров</a></li>
                <li><a href="./ru-ru/leveltravel/hotels/">Поиск отелей</a></li>
                <li><a href="./ru-ru/leveltravel/main/">Главная</a></li>
            </ColumnListLinks>
        </div>
    )
}

export function TripinsuranceList() {
    return (
        <div>
            <ListImg src='./images/List/tripinsurance.png' backgroundColor='#7358e5' />
            <ColumnListLinks>
                <li><a href="https://fm.tripinsurance.ru/Home/Details?Product=1&From=21.04.2016&To=27.04.2016&Days=7&Country=0&Territory=0&Sport=False&Offline=False&PartnerMode=False&IsfromPartner=False&Age%5B0%5D=28&selectedSlot=1&specialOffer=true&providerId=3&fullModule=true&partnerId=3267">Страхование для Шенгена</a></li>
                <li><a href="./ru-ru/tripinsurance/russia/">Страхование в России</a></li>
                <li><a href="#">Страховка в страны</a></li>
                <li><a href="https://fm.tripinsurance.ru/Home/Details?Product=1&From=01.08.2014&To=07.08.2014&Days=7&Country=0&Territory=23&Sport=True&Offline=False&PartnerMode=False&IsfromPartner=False&Age%5B0%5D=27&selectedSlot=3&specialOffer=true&fullModule=true&partnerId=3267">Горнолыжная страховка</a></li>
                <li><a href="https://fm.tripinsurance.ru/Home/Details?Product=3&From=01.01.2014&Days=365&Country=0&Territory=23&Sport=False&ProSport=False&DangerWork=False&Offline=False&PartnerMode=False&IsfromPartner=False&Age%5B0%5D=28&selectedSlot=1&specialOffer=true&providerId=3&fullModule=true&partnerId=3267">Годоваястраховка</a></li>
            </ColumnListLinks>
        </div>
    )
}

export function AviasalesList() {
    return (
        <div>
            <ListImg src='./images/List/aviasales.png' backgroundColor='#000000' />
            <ColumnListLinks>
                <li><a href="./ru-ru/aviasales/">Поиск авиабилетов и бронирование отелей</a></li>
            </ColumnListLinks>
        </div>
    )
}

export function MapsMeList() {
    return (
        <div>
            <a href="./ru-ru/mapsme/" class="link-list__logo link-list__logo_mapsme"><ListImg src='./images/List/mapsme.png' /></a>
            <ColumnListLinks>
                <li>Банковская карта</li>
                <li>eSim</li>
                <li><img src="./images/lists/apple-walletsvg.svg" alt="" width="25px" /><span>Поддерживается Wallet</span></li>
                <ListItemCenter>
                    Для пополнения используйте BINANCE<br />
                    <img src="./images/List/binance-referral.png" alt="" width="150px" /><br />
                    <WrapLink href="https://accounts.binance.me/ru/register?ref=399335636" target="_blank">https://accounts.binance.me/ru/register?ref=399335636</WrapLink>
                </ListItemCenter>
            </ColumnListLinks>
        </div>
    )
}

export function AsideNavigationList() {
    return (
        <nav>
            <ColumnRightListLinks>
                <li><a href="./ru-ru/company/information/">Информационный центр</a></li>
                <li></li>
                <li><a href="./ru-ru/company/case/">Страховой случай</a></li>
                <li><a href="./ru-ru/company/reviews/">Отзывы</a></li>
                <li><a href="./ru-ru/company/faq/">FAQ</a></li>
                <li><a href="./ru-ru/company/about/">О нас</a></li>
            </ColumnRightListLinks>
        </nav>
    )
}



const ListImg = styled.img.attrs(() => ({
    alt: ""
}))`
    margin: 0 54px;
    padding: ${props => props.backgroundColor ? "0.3em 0.5em" : "0"};
    width: 160px;
    border-radius: 3px;
    background: ${props => props.backgroundColor || "transparent"}
`

const ColumnListLinks = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.9em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 8px;

    font-size: 16px;
    font-weight: 600;
`

const ColumnRightListLinks = styled(ColumnListLinks)`
    align-items: start;
`

const ListItemCenter = styled.li`
    width: 100%;
    text-align: center;
`

const WrapLink = styled.a`
    word-wrap: break-word;
`