import styled from "styled-components"

export default function Statistic() {
    const lang = localStorage.getItem('lang');
    let label;
    switch (lang) {
        case 'en':
            label = "Bought policies and air tickets"
            break
        case 'ru':
        default:
            label = "Куплено полисов и авиабилетов"
    }
    return (
        <Div>
            <HeartImg />
            <StatisticDescription>{label}: 2 294 227</StatisticDescription>
        </Div>
    )
}

const Div = styled.div`
    padding-top: 5px;
    height: 50px;
    border-top-right-radius: 1rem;
    border-bottom: 2px solid #4f4c4e;
`

const HeartImg = styled.img.attrs(() => ({
    src: "/images/icons/heart.png",
    alt: ""
}))`
    margin: 0 20px 0 10px;
    height: 40px;
    vertical-align: middle;

    @media screen and (max-width: 450px) {
        vertical-align: top;
    }
`

const StatisticDescription = styled.span`
    display: inline-block;

    @media screen and (max-width: 450px) {
        margin-top: 4px;
        width: 260px;
    }
    
    @media screen and (max-width: 380px) {
        width: 180px;
    }
`