import styled, { css } from "styled-components";
import PageAside from "../../Components/PageAside";
import Statistic from "../../Components/Statistic";
import TopNavigationList from "../../Components/List/TopNavigationList";
import { Outlet, useBeforeUnload, useLocation, useParams } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import PageFooter from "../../Components/PageFooter";
import React, { useEffect, useState } from "react";

export default function Main() {
    const { lang } = useParams();
    const location = useLocation();
    //Восстанавливаем начальное состояние из памяти или устанавливаем выкл.
    const [isAsideVisible, setAsideVisible] = useState(Boolean(sessionStorage.getItem('isAsideVisible')));

    //Перед выгрузкой сохраням состояние в память
    useBeforeUnload(
        React.useCallback(() => {
            sessionStorage.setItem('isAsideVisible', isAsideVisible || '');
        }, [isAsideVisible])
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setAsideVisible(value => false);
    }, [location.pathname, location.search, location.hash])

    return (
        <div>
            <PageHeader burgerOnClick={() => setAsideVisible(value => !value)} />
            <PageGrid>
                <PageAside state={[isAsideVisible, setAsideVisible]} />
                <MainSide>
                    <Statistic />
                    <TopNavigationList />
                    <Outlet />
                    <PageFooter />
                </MainSide>
            </PageGrid>
        </div>
    )
}

const PageGrid = styled.div`
    display: flex;
    min-height: calc(100vh - 80px);
    overflow: hidden;
    background: rgba(33, 30, 33, 0.9411764706);
    border-radius: 1rem;
`

const MainSide = styled.div`
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: min-content;

    @media screen and (max-width: 1000px) {
        flex-shrink: 0;
        width: 100%;
    }
`

