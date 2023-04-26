import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 40%;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const StyledStatus = styled.div`
    font-size: 2rem;
`;

export const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledColumn = styled.div`
    width: ${(props) => props.width};
    display: flex;
    justify-content: center;
`;
