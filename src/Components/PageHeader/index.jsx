import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialList from "../List/SocialList";

export default function PageHeader() {
    return (
        <Header>
            <MainLink to="/"><HeaderLogo /></MainLink>
            <Division>
                <SocialList />
            </Division>
        </Header>
    )
}

const Division = styled.div`
    flex-grow: 1;
`

const Header = styled.header`
    display: flex;
`

const MainLink = styled(Link)`
    margin-left: 50px;
`

const HeaderLogo = styled.img.attrs(() => ({
    src: "/images/logo.png",
    alt: "Journey.Land"
}))`
    height: 70px;
    vertical-align: bottom;
`