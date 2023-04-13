import { useLocation, useNavigate, useParams } from "react-router"
import styled from "styled-components"

export default function LanguageButton() {
    const { lang } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Button onClick={() => changeLanguage(lang, location, navigate)}><FlagImage src={`/images/icons/${lang}-flag.svg`} /></Button>
    )
}

function changeLanguage(currentLang, location, navigate) {
    switch (currentLang) {
        case 'ru':
            navigate(location.pathname.replace(/\/ru/, '/en') + location.search + location.hash);
            break
        case 'en':
        default:
            navigate(location.pathname.replace(/\/\w{2}/, '/ru') + location.search + location.hash);
    }
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