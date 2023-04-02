import { ColumnListLinks, Div, ListImg } from ".";

export default function TripinsuranceList() {
    const lang = localStorage.getItem('lang');
    const links = {};
    switch (lang) {
        case 'en':
            links.schengen = "Insurance for Schengen"
            links.russia = "Insurance in Russia"
            links.country = "Insurance in countries"
            links.ski = "Ski insurance"
            links.year = "Annual insurance"
            break
        case 'ru':
        default:
            links.schengen = "Страхование для Шенгена"
            links.russia = "Страхование в России"
            links.country = "Страховка в страны"
            links.ski = "Горнолыжная страховка"
            links.year = "Годовая страховка"
    }
    return (
        <Div>
            <ListImg src='/images/list/tripinsurance.png' backgroundColor='#7358e5' />
            <ColumnListLinks>
                <li><a href="https://fm.tripinsurance.ru/Home/Details?Product=1&From=21.04.2016&To=27.04.2016&Days=7&Country=0&Territory=0&Sport=False&Offline=False&PartnerMode=False&IsfromPartner=False&Age%5B0%5D=28&selectedSlot=1&specialOffer=true&providerId=3&fullModule=true&partnerId=3267">{links.schengen}</a></li>
                <li><a href="./ru-ru/tripinsurance/russia/">{links.russia}</a></li>
                <li><a href="#">{links.country}</a></li>
                <li><a href="https://fm.tripinsurance.ru/Home/Details?Product=1&From=01.08.2014&To=07.08.2014&Days=7&Country=0&Territory=23&Sport=True&Offline=False&PartnerMode=False&IsfromPartner=False&Age%5B0%5D=27&selectedSlot=3&specialOffer=true&fullModule=true&partnerId=3267">{links.ski}</a></li>
                <li><a href="https://fm.tripinsurance.ru/Home/Details?Product=3&From=01.01.2014&Days=365&Country=0&Territory=23&Sport=False&ProSport=False&DangerWork=False&Offline=False&PartnerMode=False&IsfromPartner=False&Age%5B0%5D=28&selectedSlot=1&specialOffer=true&providerId=3&fullModule=true&partnerId=3267">{links.year}</a></li>
            </ColumnListLinks>
        </Div>
    )
}