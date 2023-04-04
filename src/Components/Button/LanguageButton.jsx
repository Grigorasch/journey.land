import { useLocation, useNavigate, useParams } from "react-router"
import styled from "styled-components"

export default function LanguageButton() {
    const { lang } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    return (
        <Button><FlagImage src="/images/icons/rus-flag.svg" /></Button>
    )
}

function changeLanguage(currentLang, selectLang) {
    // const url = location.pathname.replace(`/${currentLang}/`, `/${selectLang}/`);
    // navigate(url);
}

const Button = styled.button`
    display: inline;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
`

const FlagImage = styled.img.attrs(() => ({
    alt: ""
}))`
    height: 20px;
`