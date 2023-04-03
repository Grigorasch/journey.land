import styled from "styled-components"

export default function CountriesSearchButton() {
    const lang = localStorage.getItem('lang');
    let title;
    switch (lang) {
        case 'en':
            title = "Search"
            break
        case 'ru':
        default:
            title = "Искать"
    }
    return (
        <SearchButton title={title} />
    )
}

const SearchButton = styled.button`
    width: 40px;
    height: 40px;
    vertical-align: bottom;
    border: none;
    background: url(/images/icons/search.svg) center / 30px 30px no-repeat;
    transform: translateX(-120%);
    cursor: pointer;
`