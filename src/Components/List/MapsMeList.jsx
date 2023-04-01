import styled from "styled-components";
import { ColumnListLinks, Div, ListImg } from ".";

export default function MapsMeList() {
    return (
        <Div noBorder="true">
            <a href="./ru-ru/mapsme/" class="link-list__logo link-list__logo_mapsme"><ListImg src='./images/list/mapsme.png' /></a>
            <ColumnListLinks>
                <li>Банковская карта</li>
                <li>eSim</li>
                <li><img src="./images/lists/apple-walletsvg.svg" alt="" width="25px" /><span>Поддерживается Wallet</span></li>
                <ListItemCenter>
                    Для пополнения используйте BINANCE<br />
                    <img src="./images/list/binance-referral.png" alt="" width="150px" /><br />
                    <WrapLink href="https://accounts.binance.me/ru/register?ref=399335636" target="_blank">https://accounts.binance.me/ru/register?ref=399335636</WrapLink>
                </ListItemCenter>
            </ColumnListLinks>
        </Div>
    )
}

const ListItemCenter = styled.li`
    width: 100%;
    text-align: center;
`

const WrapLink = styled.a`
    word-wrap: break-word;
`