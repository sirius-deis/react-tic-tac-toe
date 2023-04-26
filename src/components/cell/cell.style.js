import styled from "styled-components";

export const StyledCell = styled.button`
    width: var(--cell-width);
    height: var(--cell-width);
    background-color: var(--cell-color);
    border: 1px solid var(--border-color);
    font-size: 2.5rem;
    cursor: pointer;
    transition: background-color ease 0.2s;
    &:hover {
        background-color: var(--cell-color-hover);
    }
`;
