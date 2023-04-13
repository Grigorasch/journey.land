import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ColumnListLinks, Div, ListImg } from ".";

export default function MapsMeList() {
    const {lang} = useParams();
    const links = {};
    switch (lang) {
        case 'en':
            links.bank = "Bank card"
            links.esim = "eSim"
            links.wallet = "Supported by Wallet"
            links.binance = "Use BINANCE for replenish"
            break
        case 'ru':
        default:
            links.bank = "Банковская карта"
            links.esim = "eSim"
            links.wallet = "Поддерживается Wallet"
            links.binance = "Для пополнения используйте BINANCE"
    }
    return (
        <Div noBorder="true">
            <Link to={`/${lang}/mapsme`}><ListImg src='/images/list/mapsme.png' /></Link>
            <ColumnListLinks>
                <li>{links.bank}</li>
                <li>{links.esim}</li>
                <li><img src="/images/lists/apple-walletsvg.svg" alt="" width="25px" /><span>{links.wallet}</span></li>
                <ListItemCenter>
                {links.binance}<br />
                    <img src="/images/list/binance-referral.png" alt="" width="150px" /><br />
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