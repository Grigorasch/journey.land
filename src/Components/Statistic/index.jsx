import styled from "styled-components"

export default function Statistic() {
    return (
        <Div>
            <HeartImg />
            <StatisticDescription>Куплено полисов и авиабилетов: 2 294 227</StatisticDescription>
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
`

const StatisticDescription = styled.span`
    display: inline-block;
`