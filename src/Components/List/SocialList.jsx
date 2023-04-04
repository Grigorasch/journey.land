import styled from "styled-components";
import { RowListLinks } from ".";

export default function SocialList({ lang }) {
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
    return (
        <SocialListLinks>
            {/* <HiddenListItem><a href="javascript:void(0)">Мы в соцсетях</a></HiddenListItem> */}
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
        width: 325px;
        line-height: 21px;
        font-size: 14px;
        row-gap: 5px;
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