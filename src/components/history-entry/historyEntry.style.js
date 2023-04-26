import styled from "styled-components";

export const StyledHistoryEntry = styled.li`
    font-size: 1.8rem;
`;

export const StyledHistoryButton = styled.button`
    padding: 0.5rem 3rem;
    border: 0;
    background-color: var(--history-color);
    min-width: 18rem;
    cursor: pointer;
    border-radius: 2px;
    &:hover {
        background-color: var(--history-color-hover);
    }
`;
