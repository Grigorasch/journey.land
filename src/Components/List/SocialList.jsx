import styled from "styled-components";
import { RowListLinks } from ".";

export default function SocialList() {
    return (
        <SocialListLinks>
            <HiddenListItem><a href="javascript:void(0)">Мы в соцсетях</a></HiddenListItem>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/vk.svg" alt="" />Вконтакте</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/facebook.svg" alt="" />Фейсбук</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/instagram.svg" alt="" />Инстаграм</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/twitter.svg" alt="" />Твитер</a></li>
            <li><a href="#" target="_blank"><SocialItemImg src="/images/icons/telegram.svg" alt="" />Телеграм</a></li>
        </SocialListLinks>
    )
}

const SocialListLinks = styled(RowListLinks)`
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    flex-wrap: wrap;

    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;

    max-width: 600px;
    height: 50px;

    overflow: hidden;
    background: #000000;
    line-height: 50px;
    color: #1972de;
    transition: width 0.3s, height 0.3s;
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