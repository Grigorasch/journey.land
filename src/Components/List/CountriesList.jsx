import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function CountriesList({ heading, countriesList }) {
    const {lang} = useParams();
    return (
        <CountriesWrapper>
            <CountriesHeading>{heading}</CountriesHeading>
            <CountriesListItem>
                {countriesList.map(item => {
                    return (
                        <CountriesItem key={item.id * item.idOrigin}>
                            <CountryLink to={`/${lang}/tripinsurance?head=4&country=${item.id}`} onClick={() => setTimeout(() => window.scrollTo(0,0),300)}>{item.name}</CountryLink>
                        </CountriesItem>
                    )
                })}
            </CountriesListItem>
        </CountriesWrapper>
    )
}

const CountriesWrapper = styled.div`
    margin-bottom: 40px;
    padding: 0px 20px;
`

const CountriesHeading = styled.h2`
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 700;
`

const CountriesListItem = styled.ul`
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
`

const CountriesItem = styled.li`
    margin-bottom: 15px;
`

const CountryLink = styled(Link)`
    border-bottom: 1px solid #ffffff;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease 0s;

    &:hover {
        text-decoration: none;
        border-bottom-color: transparent;
    }
`