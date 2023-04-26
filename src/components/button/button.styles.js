import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1rem 4rem;
    border: 0;
    font-size: 1.8rem;
    color: var(--text-color);
    background-color: var(--btn-color);
    border-radius: 0.3rem;
    cursor: pointer;
    transition: background-color ease 0.4s, color ease 0.2s;
    &:hover {
        color: var(--bg-color);
        background-color: var(--btn-color-hover);
    }
`;
