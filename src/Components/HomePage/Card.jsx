import React, { useEffect, useRef, useState } from "react";
import { useBeforeUnload } from "react-router-dom";
import styled from "styled-components"

/**
 * Вертка карточки Tripinsuranse с преимуществами
 *
 * @param   heading         Заголовок Карточки
 * @param   description     Описание картовки
 * @param   image           Картинка карточки
 * @param   index           Определяет сторону расположения картинки и выравнивания текста. Чётные - картинка слева, текст справа; Нечётные - картинка справа, текст слева.
 * @returns Card            Возвращает верстку карточки
 */
export default function Card({ heading, description, image, index }) {
    //Хук для доступа к элементу карточки
    const card = useRef();

    //Определяет сторону расположения картинки в карточке и выравнивания текста
    const align = (index % 2) ? 'left' : 'right';

    // Переменная для хранения состояния открыто/закрыто (для экранов шириной меньше 450px)
    const [state, setState] = useState(false);
    //Переменная для хранения высоты блока карточки
    const [wrapperHeight, setWrapHeight] = useState(250);
    //Переменная для хранения высоты блока тумана
    const [fogHeight, setFogHeight] = useState(120);

    useEffect(() => {
        const styles = window.getComputedStyle(card.current.children[0].children[2])
        const wrapHeight = Number(styles.top.slice(0, -2)) + Number(styles.height.slice(0, -2)) + 10 + 50;
        setWrapHeight(props => wrapHeight);
    }, [window.innerWidth]);

    return (
        <CardWrapper align={align} ref={card} state={state} wrapHeight={wrapperHeight} card={card}>
            <CardWrapperCenter>
                <CardImages src={image} align={(index % 2) ? 'right' : 'left'}/>
                <CardHeading align={align}>{heading}</CardHeading>
                <CardDescription>{description}</CardDescription>
            </CardWrapperCenter>
            <FogWrapper fogHeight={fogHeight}>
                <FogButton onClick={e => {
                    setState(props => !props);
                    setFogHeight(props => (state) ? 120 : 50);                     
                }} state={state}/>
            </FogWrapper>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 820px;
    height: 300px;
    background: #ffffff;
    text-align: ${props => props.align};
    transition: 0.3s;

    @media screen and (max-width: 1100px) {
        width: 700px;
        height: 260px;
    }

    @media screen and (max-width: 768px) {
        width: auto;
    }

    @media screen and (max-width: 560px) {
        align-items: flex-start;
        padding: 15px;
    }

    @media screen and  (max-width: 450px) {
        padding: 10px;
        overflow: hidden;
        height: ${props => (props.state) ? props.wrapHeight : 250}px;
    }
`

const CardWrapperCenter = styled.div`
    flex-grow: 1;
`

const CardHeading = styled.h2`
    position: relative;
    margin-bottom: 30px;
    color: #525252;
    font-size: 32px;
    font-weight: 300;
    line-height: 38px;
    letter-spacing: 0.27px;

    &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        ${props => props.align}: 0;
        width: 50px;
        height: 2px;
        background: #7358e5;
    }

    @media screen and (max-width: 670px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media screen and (max-width: 560px) {
        position: relative;
        top: 35px;
        transform: translateY(-50%);
        text-align: center;

        &::after {
            opacity: 0;
        }
    }

    @media screen and (max-width: 450px) {
        top: 40px;
        font-size: 20px;
        line-height: 24px;
    }
`

const CardDescription = styled.p`
    width: 100%;
    color: #404040;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0.11px;

    @media screen and (max-width: 670px) {
        font-size: 14px;
        line-height: 22px;
    }

    @media screen and (max-width: 560px) {
        position: absolute;
        top: 100px;
        text-align: left;
    }

    @media screen and (max-width: 450px) {
        top: 110px;
        width: 95%;
    }
`

const CardImages = styled.img.attrs(() => ({
    alt: ""
}))`
    float: ${props => props.align};
    height: 240px;
    transition: 0.3s;

    @media screen and (max-width: 1100px) {
        margin-top: 10px;
        margin-left: 10px;
        height: 160px;
    }

    @media screen and (max-width: 768px) {
        height: 140px;
    }

    @media screen and (max-width: 560px) {
        margin: 0;
        height: 70px;
    }

    @media screen and (max-width: 450px) {
        margin: 10px 0;
        height: 60px;
    }
`

const FogWrapper = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${props => props.fogHeight}px;
    background: linear-gradient(to top, #ffffff 30%, #ffffff99 80%, #ffffff00 100%);

    @media screen and (max-width: 450px) {
        display: block;
    }
`

const FogButton = styled.button`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%) ${props => (props.state) ? 'rotate(-90deg)' : 'rotate(90deg)'};
    width: 30px;
    height: 30px;
    background: url("/images/icons/arrow.svg") center / contain no-repeat;
    border: none;
    transition: 0.3s;
    cursor: pointer;
`