import Header from "../../Components/PageHeader";
import styled from "styled-components";
import PageAside from "../../Components/PageAside";
import Statistic from "../../Components/Statistic";
import TopNavigationList from "../../Components/List/TopNavigationList";

export default function Main() {
    document.title = 'Главная | Jorney Land'
    return (
        <div>
            <Header />
            <PageGrid>
                <PageAside />
                <MainSide>
                    <Statistic />
                    <TopNavigationList />
                </MainSide>
            </PageGrid>
        </div>
    )
}

const PageGrid = styled.div`
    display: flex;
    min-height: calc(100vh - 80px);
    background: rgba(33, 30, 33, 0.9411764706);
    border-radius: 1rem;
`

const MainSide = styled.div`
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: min-content;
`

