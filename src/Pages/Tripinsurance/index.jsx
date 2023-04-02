import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { PageMain } from "../../Components/PageMain";

export default function Tripinsurance() {
    const ref = useRef(null);
    const lang = localStorage.getItem('lang');
    switch (lang) {
        case 'en':
            document.title = 'Tripinsurance | Jorney Land';
            break
        case 'ru':
        default:
            document.title = 'Страхование Tripinsurance | Jorney Land';
            break;
    }
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    // searchParams.set('has', true);
    // setSearchParams(searchParams => searchParams.set('obj', 'val'));
    console.log(searchParams.get('key'));

    useEffect(() => {

    }, []);
    return (    
        <PageMain ref={ref}>

        </PageMain>
    )
}