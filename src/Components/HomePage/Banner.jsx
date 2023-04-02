import styled from "styled-components";

export default function Banner() {
    return (
        <BannerWrapper>
<BannerContainer>

</BannerContainer>
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
    margin: 0 auto;
    padding: 6px;
    width: 820px;
    height: 200px;
    background: #141414;
`

const BannerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    border-radius: 10px;
    background: url(./images/icons/airplane.svg) 410px 40px/auto 160px no-repeat, #1d1d1d;
`