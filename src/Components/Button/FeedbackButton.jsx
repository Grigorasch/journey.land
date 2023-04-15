import { useParams } from "react-router";
import styled from "styled-components"

export function FeedbackButton({ modalState }) {
    const lang = useParams();
    let label;
    const [dialogState, setDialogState] = modalState;

    switch (lang) {
        case 'en':
            label = "Feedback"
            break
        case 'ru':
        default:
            label = "Написать"
    }
    return (
        <Feedback onClick={event => {
            console.log(dialogState);
            setDialogState(props => true);
            console.log(dialogState);

        }}>{label}</Feedback>
    )
}

const Feedback = styled.button`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 170px;
    height: 40px;

    /* font-size: 14px; */
    font-size: inherit;
    font-weight: 600;
    color: #3b3c3f;

    background: #e7e7ee;
    border-radius: 0.5em;
    border: 3px solid #e7e7ee;
    cursor: pointer;
    transition: 0.3s;

    @media screen and (max-width: 1200px) {
        width: 120px;
    }

    @media screen and (max-width: 1000px) {
        width: 170px;
    }
`