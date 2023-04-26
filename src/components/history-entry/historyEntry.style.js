import styled from "styled-components";

export const StyledHistoryEntry = styled.li`
    font-size: 1.8rem;
    @media screen and (max-width: 1250px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 850px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width: 650px) {
        font-size: 1.8rem;
    }
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
    @media screen and (max-width: 1250px) {
        padding: 0.4rem 0.5rem;
    }
    @media screen and (max-width: 850px) {
        padding: 0.3rem 2rem;
    }
    @media screen and (max-width: 650px) {
        padding: 0.2rem 1.5rem;
    }
`;
