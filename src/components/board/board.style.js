import styled from "styled-components";

export const StyledBoard = styled.div`
    width: calc(var(--cell-width) * 3);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 7px 4px var(--shadow-color);
`;
