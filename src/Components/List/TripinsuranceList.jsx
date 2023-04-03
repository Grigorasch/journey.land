import { Link, useSearchParams } from "react-router-dom";
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

    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <Div>
            <ListImg src='/images/list/tripinsurance.png' backgroundColor='#7358e5' />
            <ColumnListLinks>
                <li><Link to={`/${lang}/tripinsurance?head=1&country=1`}>{links.schengen}</Link></li>
                <li><Link to={`/${lang}/tripinsurance?head=2&country=2`}>{links.russia}</Link></li>
                <li><Link to={`/${lang}/tripinsurance?head=3&showList=true`}>{links.country}</Link></li>
                <li><Link to={`/${lang}/tripinsurance?head=5`}>{links.ski}</Link></li>
                <li><Link to={`/${lang}/tripinsurance?head=6`}>{links.year}</Link></li>
            </ColumnListLinks>
        </Div>
    )
}