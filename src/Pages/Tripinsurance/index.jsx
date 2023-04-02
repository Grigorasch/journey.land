import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PageMain } from "../../Components/PageMain";

export default function Tripinsurance() {
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

    const ref = useRef(null);
    useEffect(() => {
        const HeaderText = PatternHeaderText[searchParams.get('head')] || 'Страхование путешественников';
        const SecondHeaderText = 'Полис, который действительно работает';

        document.getElementById('tripinsurance-full-module').src = `https://fm.tripinsurance.ru/?partnerId=3267&NewModule=true&fullModuleModel.IgnoreStoredSettings=true&fullModuleModel.HeaderText=${HeaderText}&fullModuleModel.SpecialOffers=&fullModuleModel.SecondHeaderText=${SecondHeaderText}&fullModuleModel.ShowLogo=true&fullModuleModel.ShowReasons=false&fullModuleModel.BackgroundColor=%23000000&fullModuleModel.SecondaryBackgroundColor=%23000000&fullModuleModel.TextColor=%23ffffff&fullModuleModel.SecondaryTextColor=%23ffffff&fullModuleModel.AddMarker=&fullModuleModel.Adaptive=true&fullModuleModel.Width=960&SiteUrl=http://127.0.0.1:5500/index.html`;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fm.tripinsurance.ru/Content/styles/partners/classicModule/adapt.css';
        ref.current.appendChild(link);
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://fm.tripinsurance.ru/Scripts/finalliance/partner/fullModule/fullExternal.js';
        ref.current.appendChild(script);
    }, []);
    return (
        <PageMain ref={ref} id="main">
            <InsuranceWrapper>
                <InsuranceIFrame />
            </InsuranceWrapper>
        </PageMain>
    )
}

const InsuranceWrapper = styled.div`
    width: 100%;
    background: #000000;
`

const InsuranceIFrame = styled.iframe.attrs(() => ({
    name: "module",
    scrolling: "no",
    id: "tripinsurance-full-module",
    width: "100%",
    seamless: "seamless",
    src: "",
}))`
    margin: 0 auto;
    border: none;
    display: block;
    max-width: 960px;
`

const PatternHeaderText = {
    '1': 'Медицинская страховка для Шенгенской визы',
    '2': 'Страхование путешествий по России',
    '3': 'Страховка для стран',
    '4': 'Страховка для поездки ',
    '5': 'Страхование горнолыжников',
    '6': 'Туристическая страховка на год'
}