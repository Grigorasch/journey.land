import styled from 'styled-components';

export const Div = styled.div`
    padding: 15px 0;
    border-bottom: ${props => props.noBorder ? "none" : "2px solid #4f4c4e"};
`

export const ListImg = styled.img.attrs(() => ({
    alt: ""
}))`
    margin: 0 54px 1em;
    padding: ${props => props.backgroundColor ? "0.3em 0.5em" : "0"};
    width: 160px;
    border-radius: 3px;
    background: ${props => props.backgroundColor || "transparent"}
`

export const RowListLinks = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 0.9em;

    padding-left: 1em;
    padding-right: 1em;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
`

export const ColumnListLinks = styled(RowListLinks)`
    flex-direction: column;
`