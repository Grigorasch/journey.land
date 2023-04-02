import styled from "styled-components";
import PageAside from "../../Components/PageAside";
import Statistic from "../../Components/Statistic";
import TopNavigationList from "../../Components/List/TopNavigationList";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import PageFooter from "../../Components/PageFooter";

export default function Main() {
    // const [lang, setLang] = useState('ru');
    const navigate = useNavigate();
    const params = useLoaderData();
    switch (params.lang) {
        case 'en':
            document.title = 'Home Page | Jorney Land';
            break
        case 'ru':
        default:
            document.title = 'Главная | Jorney Land';
            break;
    }
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

