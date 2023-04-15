import styled from "styled-components"

export default function RefreshButton({ onClick }) {
    return (
        <Refresh onClick={onClick}><RefreshImg src="/images/icons/refresh.svg" alt="Обновить капчу." /></Refresh>
    )
}

const Refresh = styled.button`
    padding: 5px;
    border: none;
    background: transparent;
    cursor: pointer;
`

const RefreshImg = styled.img`
    height: 25px;
`