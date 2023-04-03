import styled from "styled-components"

export default function Card({ heading, description, image, index }) {
    if (index % 2) {
        return (
            <CardWrapper>
                <TextWrapper>
                    <CardHeading>{heading}</CardHeading>
                    <CardDescription>{description}</CardDescription>
                </TextWrapper>
                <CardImages src={image} />
            </CardWrapper>
        )
    } else {
        return (
            <CardWrapper>
                <CardImages src={image} />
                <TextWrapper>
                    <CardHeading>{heading}</CardHeading>
                    <CardDescription>{description}</CardDescription>
                </TextWrapper>
            </CardWrapper>
        )
    }
}

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    width: 820px;
    height: 300px;
    background: #ffffff;
`

const TextWrapper = styled.div`
    margin-right: 10px;
`

const CardHeading = styled.h2`
    position: relative;
    margin-bottom: 30px;
    color: #525252;
    font-size: 32px;
    font-weight: 300;
    line-height: 38px;
    letter-spacing: 0.27px;

    &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 50px;
        height: 2px;
        background: #7358e5;
    }
`

const CardDescription = styled.p`
    width: 100%;
    color: #404040;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0.11px;
`

const CardImages = styled.img.attrs(() => ({
    alt: ""
}))`
    height: 80%;
`