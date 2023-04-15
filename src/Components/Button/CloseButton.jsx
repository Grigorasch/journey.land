import styled from "styled-components"

export default function CloseButton({ onClick }) {
    return (
        <Close onClick={onClick}><CloseImg src="/images/icons/close.svg" alt="Закрыть." /></Close>
    )
}

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    border: none;
    background: transparent;
    cursor: pointer;
`

const CloseImg = styled.img`
    height: 20px;
`