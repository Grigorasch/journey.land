import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RowListLinks } from ".";

export default function SocialList({ lang }) {
    const [isOpen, setOpen] = useState(false);
    const socialName = {};
    switch (lang) {
        case 'en':
            socialName.we = 'We are in social'
            socialName.vk = 'VK';
            socialName.fb = 'Facebook'
            socialName.in = 'Instagram'
            socialName.tw = 'Twitter'
            socialName.tg = 'Telegram'
            break
        case 'ru':
        default:
            socialName.we = 'Мы в соцсетях'
            socialName.vk = 'ВКонтакте';
            socialName.fb = 'Фейсбук'
            socialName.in = 'Инстаграм'
            socialName.tw = 'Твитер'
            socialName.tg = 'Телеграм'
    }

    //При увеличении ширины свыше 690px, когда socialList уже не сворачивается, состояние сбрасывается на спрятанное, чтобы при повторном уменшении экрана список уже был скрыт
    useEffect(() => {
        mediaQuery.addEventListener('change', event => {
            if (event.matches) {
                setOpen(state => false);
            }
        });
    }, []);

    // При открытии списка (на экранах, когда список собран в меню) добавляется слушатель на документ, который закроет список в случае клика не по списку.
    useEffect(() => {
        const closeList = event => {
            if (event.target.id !== 'socialList' && event.target.parentElement.id !== 'socialList') {
                setOpen(state => false);
            }
        };
        if (isOpen) {
            document.addEventListener('click', closeList);
        } else {
            document.removeEventListener('click', closeList);
        }
        return () => document.removeEventListener('click', closeList);
    }, [isOpen]);

    return (
        <SocialListLinks isListOpen={isOpen} id="socialList">
            <li><SocialListButton as="button" onClick={e => {
                e.stopPropagation();
                setOpen(state => !state);
            }}>
                <SocialListButtonImg src="/images/icons/social.svg" alt="" />
            </SocialListButton></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/vk.svg" alt="" />{socialName.vk}</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/facebook.svg" alt="" />{socialName.fb}</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/instagram.svg" alt="" />{socialName.in}</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/twitter.svg" alt="" />{socialName.tw}</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/telegram.svg" alt="" />{socialName.tg}</a></li>
        </SocialListLinks>
    )
}

const SocialListLinks = styled(RowListLinks)`
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    flex-wrap: wrap;

    margin: 0 auto;

    max-width: 600px;
    height: 50px;

    overflow: hidden;
    background: #000000;
    line-height: 50px;
    color: #1972de;
    transition: width 0.3s, height 0.3s;

    @media screen and (max-width: 935px) {
        width: 340px;
        line-height: 21px;
        font-size: 14px;
        row-gap: 5px;
    }

    @media screen and (max-width: 690px) {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: start;
        gap: 0;
        position: relative;
        z-index: 5;
        margin: 0 auto;
        width: ${props => (props.isListOpen) ? '150px' : '50px'};
        height: ${props => (props.isListOpen) ? '300px' : '50px'};
        font-size: 16px;
        line-height: 50px;
        transition: width 0.3s ${props => (props.isListOpen) ? '0s' : '0.3s'},
            height 0.3s ${props => (props.isListOpen) ? '0.3s' : '0s'};
    }

    @media screen and (min-width: 690px) {
        & li:first-child {
            display: none;
        }
    }

    @media screen and (max-width: 480px) {
        padding: 0;
        width: ${props => (props.isListOpen) ? '130px' : '50px'};
        font-size: 14px;
    }
`

const HiddenListItem = styled.li`
    display: none;
`

const SocialItemImg = styled.img`
    margin-right: 0.4em;
    width: 1.2em;
    height: 1.2em;
    vertical-align: text-bottom;
`

const SocialListButton = styled(Link)`
    padding: 0;
    margin: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const SocialListButtonImg = styled.img`
    height: 30px;
    vertical-align: middle;
`

const mediaQuery = window.matchMedia('(min-width: 690px)');