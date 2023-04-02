import { useEffect, useRef } from "react";
import { PageMain } from "../../Components/PageMain";

export default function Aviasales() {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            if (!document.getElementById('aviasales-script')) {
                const script = document.createElement('script');
                script.id = 'aviasales-script'
                script.src = 'https://tp.media/content?trs=210401&shmarker=411135&combine_promos=101_7873&show_hotels=true&locale=ru&currency=rub&searchUrl=www.aviasales.ru%2Fsearch&color_button=%23FFFFFFff&color_icons=%23FFFFFFff&dark=%23262626&light=%23000000ff&secondary=%23000000ff&special=%23141313ff&color_focused=%23000000ff&border_radius=29&no_labels=&plain=true&promo_id=7879&campaign_id=100';
                script.async = true;
                ref.current.appendChild(script);
            }
        }
    },[]);
    return (
        <PageMain ref={ref} />
    )
}