import styled from "styled-components"

export function FeedbackButton() {
    return (
        <Feedback>Написать</Feedback>
    )
}

const Feedback = styled.button`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 170px;
    height: 40px;

    font-size: 14px;
    font-weight: 600;
    color: #3b3c3f;

    background: #e7e7ee;
    border-radius: 0.5em;
    border: 3px solid #e7e7ee;
    cursor: pointer;
    transition: 0.3s;
`