import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PageMain } from "../../Components/PageMain";
import { Countries } from "./Countries";

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

    let [searchParams] = useSearchParams();
    const ref = useRef(null);

    useEffect(() => {
        const formParams = {};
        //Определяем заголовки формы
        formParams.headerText = PatternHeaderText[searchParams.get('head')] || 'Страхование путешественников';
        formParams.secondHeaderText = 'Полис, который действительно работает';

        //Определяем преднастроенную страну
        const country = searchParams.get('country');
        if (country) {
            if (country === '1' || country === '2') {
                formParams.defaultCountry = AvaibleTerritory[country];
            } else {
                formParams.defaultCountry = '';
                for (let key in Countries) {
                    const Country = Countries[key]
                        .find(item => item.id == country);
                    if (Country) {
                        formParams.defaultCountry = `&fullModuleModel.DefaultCountry=${Country.idOrigin}`;
                        break;
                    }
                }
            }
        } else {
            formParams.defaultCountry = '';
        }

        //Устанавливаем путь для iframe с учётом заданных параметров
        document.getElementById('tripinsurance-full-module').src = `https://fm.tripinsurance.ru/?partnerId=3267&NewModule=true&fullModuleModel.IgnoreStoredSettings=true&fullModuleModel.HeaderText=${formParams.headerText}&fullModuleModel.SpecialOffers=&fullModuleModel.SecondHeaderText=${formParams.secondHeaderText}&fullModuleModel.ShowLogo=true&fullModuleModel.ShowReasons=false&fullModuleModel.BackgroundColor=%23000000&fullModuleModel.SecondaryBackgroundColor=%23000000&fullModuleModel.TextColor=%23ffffff&fullModuleModel.SecondaryTextColor=%23ffffff&fullModuleModel.AddMarker=${formParams.defaultCountry}&fullModuleModel.Adaptive=true&fullModuleModel.Width=960&SiteUrl=http://127.0.0.1:5500/index.html`;

        //Вставляем таблицу стилей формы
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fm.tripinsurance.ru/Content/styles/partners/classicModule/adapt.css';
        ref.current.appendChild(link);

        //Вставляем скрипт формы
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://fm.tripinsurance.ru/Scripts/finalliance/partner/fullModule/fullExternal.js';
        ref.current.appendChild(script);
    }, [searchParams]);
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

const AvaibleTerritory = {
    '1': '&fullModuleModel.DefaultTerritory=23',    //Шенген
    '2': '&fullModuleModel.DefaultTerritory=14'     //Россия
}