import styled from "styled-components";
import { FeedbackButton } from "../Button/FeedbackButton";
import AsideNavigationList from "../List/AsideNavigationList";
import MapsMeList from "../List/MapsMeList";
import AviasalesList from "../List/AviasalesList";
import TripinsuranceList from "../List/TripinsuranceList";
import LevelTravelList from "../List/LevelTravelList";
import React, { useEffect, useRef, useState } from "react";
import { useBeforeUnload } from "react-router-dom";


export default function PageAside({ state }) {
    const lang = localStorage.getItem('lang');
    const [isAsideVisible, setAsideVisible] = state;
    const asideState = useRef(0);
    useBeforeUnload(
        React.useCallback(() => {
            localStorage.stuff = 'state';
        })
    );

        useEffect(() => {
            window.addEventListener('resize', () => console.log('CHANGE'));
            return () => window.removeEventListener('resize');
        }, [])

    return (
        <Aside isAsideVisible={isAsideVisible}>
            <ButtonWrapper>
                <FeedbackButton onClick={event => {
                    asideState.current++;
                    console.log(asideState.current);
                }} />
            </ButtonWrapper>
            <LevelTravelList />
            <TripinsuranceList />
            <AviasalesList />
            <MapsMeList />
            <Separator />
            <AsideNavigationList />
        </Aside>
    )
}

const Aside = styled.aside`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
    width: 270px;
    overflow: hidden;
    border-right: 2px solid #4f4c4e;
    font-size: 16px;
    text-align: center;
    transition: 0.3s;

    @media  (max-width: 1200px) {
        width: 200px;
        font-size: 14px;
    }

    @media  (max-width: 1000px) {
        /* display: ${props => props.isAsideVisible ? 'block' : 'none'}; */
        margin-left: -2px;
        width: ${props => props.isAsideVisible ? '270' : '0'}px;
        font-size: 16px;

        & div:nth-child(n) {
            width: 268px;
        }
    }
`

const ButtonWrapper = styled.div`
    height: 100px;
    text-align: center;
    border-top-left-radius: 1rem;
    border-bottom: 2px solid #4f4c4e;
`

const Separator = styled.div`
    flex-grow: 1;
`