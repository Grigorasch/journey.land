import { useEffect, useRef } from "react";
import { PageMain } from "../../Components/PageMain";

const links = {};
export default function Aviasales() {
    const lang = localStorage.getItem('lang');
    switch (lang) {
        case 'en':
            document.title = 'Search flight tickets Aviasales | Jorney Land';
            links.locale = 'en'
            links.currency = 'usd'
            links.searchUrl = 'www.aviasales.com'
            break
        case 'ru':
        default:
            document.title = 'Поиск билетов Авиасейлс | Jorney Land';
            links.locale = 'ru'
            links.currency = 'rub'
            links.searchUrl = 'www.aviasales.ru'
            break;
    }
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            if (!document.getElementById('aviasales-script')) {
                console.log('aaa');
                const script = document.createElement('script');
                script.id = 'aviasales-script'
                script.src = `https://tp.media/content?trs=210401&shmarker=411135&combine_promos=101_7873&show_hotels=true&locale=${links.locale}&currency=${links.currency}&searchUrl=${links.searchUrl}%2Fsearch&color_button=%23FFFFFFff&color_icons=%23FFFFFFff&dark=%23262626&light=%23000000ff&secondary=%23000000ff&special=%23141313ff&color_focused=%23000000ff&border_radius=29&no_labels=&plain=true&promo_id=7879&campaign_id=100`;
                script.async = true;
                ref.current.appendChild(script);
            } else {
                console.log('bbb');
            }
        }
    },[]);
    return (
        <PageMain ref={ref} />
    )
}