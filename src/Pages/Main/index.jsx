import styled from "styled-components";
import PageAside from "../../Components/PageAside";
import Statistic from "../../Components/Statistic";
import TopNavigationList from "../../Components/List/TopNavigationList";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import PageFooter from "../../Components/PageFooter";

export default function Main() {
    return (
        <div>
            <PageHeader />
            <PageGrid>
                <PageAside />
                <MainSide>
                    <Statistic />
                    <TopNavigationList />
                    <Outlet />
                    <PageFooter />
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

