import styled from "styled-components";
import { PageMain } from "../../Components/PageMain";

export default function MapsMe() {
    return (
        <PageMain>
            <GridWrapper>
                <Card image="/images/mapsme/IMG_4292.png" />
                <Card image="/images/mapsme/IMG_4293.png" />
                <Card image="/images/mapsme/IMG_4295.png" />
                <div><CardImage src="/images/mapsme/IMG_4290.png" /></div>
                <Card image="/images/mapsme/IMG_4294.png" />
                <CardSize image="/images/mapsme/IMG_4301.jpg" />
                <ContentWrapper>ТЕКСТ</ContentWrapper>
            </GridWrapper>
        </PageMain>
    )
}

const GridWrapper = styled.div`
    margin: 40px auto 10px;
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(2, 400px);
    gap: 10px;
    width: fit-content;
    transition: 0.3s;
    

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(4, 180px);
        grid-template-rows: repeat(2, 360px);
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(4, 21vw);
        grid-template-rows: repeat(2, 42vw);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 42vw);
        grid-template-rows: repeat(4, 84vw);
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 38vw);
        grid-template-rows: repeat(4, 76vw);
    }
    
`

const Card = styled.div`
    padding: 5px;
    border: 1px solid #fd3efa;
    border-radius: 11px;
    box-shadow: 0 0 20px 0px #fd3efa;
    background: linear-gradient(90deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 5%, rgba(253,62,250,0) 15%), linear-gradient(-90deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 5%, rgba(253,62,250,0) 15%), linear-gradient(0deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 2.5%, rgba(253,62,250,0) 7%), linear-gradient(180deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 2.5%, rgba(253,62,250,0) 7%), url(${props => props.image}) center / 91% auto no-repeat;
`

const CardSize = styled(Card)`
    background: linear-gradient(90deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 5%, rgba(253,62,250,0) 15%), linear-gradient(-90deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 5%, rgba(253,62,250,0) 15%), linear-gradient(0deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 2.5%, rgba(253,62,250,0) 7%), linear-gradient(180deg, rgba(253,62,250,1) 0%, rgba(253,62,250,0.20) 2.5%, rgba(253,62,250,0) 7%), url(${props => props.image}) center / 92% 96% no-repeat;
`

const CardImage = styled.img.attrs(() => ({
    alt: ""
}))`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

const ContentWrapper = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    background: #7900ff;
    border-radius: 40px;
    text-align: center;
    line-height: 400px;

    @media screen and (max-width: 1100px) {
        line-height: 360px;
    }

    @media screen and (max-width: 800px) {
        line-height: 42vw;
    }

    @media screen and (max-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
        line-height: 90vw;
    }
    
    @media screen and (max-width: 400px) {
        line-height: 76vw;
    }
`