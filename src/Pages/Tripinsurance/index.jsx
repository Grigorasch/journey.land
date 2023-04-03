import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CountriesList from "../../Components/List/CountriesList";
import { PageMain } from "../../Components/PageMain";
import { Countries } from "./Countries";
import CountriesSearchButton from "../../Components/Button/CountriesSearchButton"

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

    useEffect(() => {
        if (searchParams.get('showList') === 'true') {

        }
    }, [searchParams.get('showList')])

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
                        if (searchParams.get('head') === '4') {
                            formParams.headerText += Country.to;
                        }
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

    const [searchText, setSearchText] = useState('');
    const initialData = {
        previous: '',
        current: '',
        domList: [],
        dataList: [],
        visibleList: [],
        listCountries: { current: null }
    }

    const data = useRef(initialData)
    useEffect(() => {
        const divWrapper = data.current.listCountries.current;
        const keys = Object.keys(Countries);
        keys.forEach((key, index) => {
            const count = Countries[key];
            data.current.dataList[index] = [];
            data.current.domList[index] = [];
            data.current.visibleList[index] = [];
            count.forEach((land, number) => {
                // land.name = land.name.toLowerCase();
                data.current.dataList[index][number] = Object.assign({}, land);
                data.current.dataList[index][number].name = data.current.dataList[index][number].name.toLowerCase();
                data.current.domList[index][number] = divWrapper.children[index].children[1].children[number];
                data.current.visibleList[index][number] = true;
            })
        });
    }, []);

    useEffect(() => {
        console.log(searchText);
        data.current.previous = data.current.current;
        data.current.current = searchText;
        if (data.current.current.includes(data.current.previous)) {
            data.current.visibleList = data.current.visibleList.map((list, order) => {
                let i = 0;
                list = list.map((condit, number) => {
                    if (condit) {
                        if (!data.current.dataList[order][number].name.includes(data.current.current)) {
                            condit = false;
                            data.current.domList[order][number].style = 'display: none';
                            i++; 
                        }
                    } else {
                        i++;
                    }
                    return condit;
                })
                if (list.length === i) {
                    data.current.domList[order][0].parentElement.parentElement.style = 'display: none;'
                }
                return list;
            })
        } else {
            data.current.visibleList = data.current.visibleList.map((list, order) => {
                let i = 0;
                list = list.map((condit, number) => {
                    if (data.current.dataList[order][number].name.includes(data.current.current)) {
                        if (!condit) {
                            condit = true;
                            data.current.domList[order][number].style = 'display: block';
                        }
                    } else {
                        if (condit) {
                            condit = false;
                            data.current.domList[order][number].style = 'display: none';
                        }
                        i++;
                    }
                    return condit;
                })
                if (list.length === i) {
                    data.current.domList[order][0].parentElement.parentElement.style = 'display: none;'
                } else {
                    data.current.domList[order][0].parentElement.parentElement.style = 'display: block;'
                }
                return list;
            })
        }
console.log(data.current);
    }, [searchText]);

    const ChildrenList = [];
    for (let key in Countries) {
        ChildrenList.push(<CountriesList heading={key} countriesList={Countries[key]} key={key.charCodeAt()} />)
    }
    return (
        <PageMain ref={ref} id="main">
            <InsuranceWrapper>
                <InsuranceIFrame />
                <CountriesContainer showList={searchParams.get('showList')}>
                    <CountriesListHeading>Популярные страны</CountriesListHeading>
                    <CountriesListDescription>
                        Страхование выезжающих за границу онлайн по всему миру, а также России и СНГ вне зависимости от гражданства путешественника. Все полисы соответствуют визовым требованиям, либо минимально необходимым условиям для посещения иностранных государств. Просто выберите нужную страну из выпадающего списка при расчете страховки. Ниже показаны все страны доступные нашим клиентам
                    </CountriesListDescription>
                    <CountriesSearchInput onInput={event => {
                        setSearchText(event.target.value.toLowerCase())
                    }} />
                    <CountriesSearchButton />
                    <CountriesListWrapper ref={data.current.listCountries}>
                        {ChildrenList.map(item => item)}
                    </CountriesListWrapper>
                </CountriesContainer>
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

const CountriesContainer = styled.section`
    display: ${props => (props.showList === 'true') ? 'block' : 'none'};
    padding-top: 50px;
    margin: 0 auto;
    width: 960px;
    color: #ffffff;
    border-top: 2px solid #ffffff;
`

const CountriesListHeading = styled.h1`
    margin-left: 15px;
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: 400;
`
const CountriesListDescription = styled.p`
    margin-left: 15px;
    margin-bottom: 30px;
    width: 660px;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
`

const CountriesSearchInput = styled.input.attrs(() => ({
    type: 'text',
    id: 'search-field'
}))`
    margin-left: 55px;
    width: 300px;
    height: 40px;
`

const CountriesListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 3fr) 2fr;
    justify-content: start;
    padding-top: 50px;
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