import styled from "styled-components";
import { FeedbackButton } from "../../Components/Button";
import AsideNavigationList from "../List/AsideNavigationList";
import MapsMeList from "../List/MapsMeList";
import AviasalesList from "../List/AviasalesList";
import TripinsuranceList from "../List/TripinsuranceList";
import LevelTravelList from "../List/LevelTravelList";


export default function PageAside() {
    const lang = localStorage.getItem('lang');
    return (
        <Aside>
            <ButtonWrapper>
                <FeedbackButton />
            </ButtonWrapper>
            <LevelTravelList />
            <TripinsuranceList />
            <AviasalesList />
            <MapsMeList />
            <Separator />
            <AsideNavigationList />
        </Aside>
    )
}

const Aside = styled.aside`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
    width: 270px;
    border-right: 2px solid #4f4c4e;
    text-align: center;
    transition: 0.3s;
`

const ButtonWrapper = styled.div`
    height: 100px;
    text-align: start;
    padding-left: 49px;
    border-top-left-radius: 1rem;
    border-bottom: 2px solid #4f4c4e;
`

const Separator = styled.div`
    flex-grow: 1;
`