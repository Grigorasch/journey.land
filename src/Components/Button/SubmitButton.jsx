import { useParams } from "react-router-dom";
import styled from "styled-components";

export function SubmitButton() {
    const { lang } = useParams();
    
    let label;
    switch (lang) {
        case 'en':
            label = "Submit"
            break
        case 'ru':
        default:
            label = "Отправить заявку"
    }

    return (
        <Submit type="submit" id="submit">{label}</Submit>
    )
}

const Submit = styled.button`
    margin: 0 auto;
    width: 250px;
    height: 50px;

    font-size: 16px;
    font-weight: 600;
    color: #3b3c3f;

    background: #e7e7ee;
    border-radius: 0.5em;
    border: 3px solid #e7e7ee;
    cursor: pointer;
    transition: 0.3s;

    @media screen and (max-width: 650px) {
        width: 200px;
        font-size: 14px;
    }

    @media screen and (max-width: 450px) {
        width: 170px;
        font-size: 12px;
    }
`